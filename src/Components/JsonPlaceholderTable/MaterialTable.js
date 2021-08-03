import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider, TextField } from "@material-ui/core";

import { createTheme } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import { jsonAPI } from "../../APIs/API";
//import "./customClass.css";
import { ErrorMessage, SuccessMessage, Loading } from "./TableActionAlert";

const JsonTable = () => {
  const [data, setDataList] = useState([]);
  const [preferDarkMode, setPreferDarkMode] = useState(() => {
    const mode = localStorage.getItem("_tableDarkMode");
    return mode === "true" || false;
  });
  const [tableLoading, setTableLoading] = useState(true);
  const [error, setError] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [lastUpdateId, setLastUpdateId] = useState(null);

  useEffect(() => {
    handleClearMessage();
    handleTableDataShow();
  }, []);

  const columns = [
    {
      title: "userId",
      field: "userId",
      cellStyle: {
        width: "10%",
      },
      headerStyle: {
        //  backgroundColor: "#039be5",
      },
    },
    {
      title: "id",
      field: "id",
      cellStyle: {
        width: "10%",
      },
      headerStyle: {
        // backgroundColor: "#039be5",
      },
    },
    {
      title: "title",
      field: "title",
      cellStyle: {
        width: "40%",
      },
      headerStyle: {
        // backgroundColor: "#039be5",
      },
      editComponent: ({ value, onChange }) => (
        <TextField
          onChange={(e) => onChange(e.target.value)}
          value={value}
          multiline
          fullWidth
        />
      ),
    },
    {
      title: "body",
      field: "body",
      cellStyle: {
        width: "40%",
      },
      headerStyle: {
        // backgroundColor: "#039be5",
        textAlign: "center",
      },
      editComponent: ({ value, onChange }) => (
        <TextField
          onChange={(e) => onChange(e.target.value)}
          value={value}
          multiline
          fullWidth
        />
      ),
      //lookup: { 1: "İstanbul", 2: "Şanlıurfa" },
    },
  ];
  const theme = createTheme({
    palette: {
      type: preferDarkMode ? "dark" : "light",
    },
  });

  const handleDarkModeChange = () => {
    setPreferDarkMode(!preferDarkMode);
    localStorage.setItem("_tableDarkMode", !preferDarkMode);
  };

  const handleTableDataShow = () => {
    setTableLoading(true);
    jsonAPI
      .get("posts")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setDataList(data);
        setTableLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleTableDataEdit = (userId, id, title, body) => {
    handleClearMessage();
    jsonAPI({
      method: "put",
      url: `/posts/${id}`,
      data: {
        id: `${id}`,
        userId: `${userId}`,
        title: `${title}`,
        body: `${body}`,
      },
    })
      .then((res) => {
        console.log(res);
        handleTableDataShow();
        setLastUpdateId(`${id}`);
        setEditSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  const handleClearMessage = () => {
    setError(false);
    setEditSuccess(false);
    setLastUpdateId(null);
  };

  return (
    <>
      <ErrorMessage error={error} handleClearMessage={handleClearMessage} />
      <SuccessMessage
        editSuccess={editSuccess}
        handleClearMessage={handleClearMessage}
        lastUpdateId={lastUpdateId}
      />
      {tableLoading && <Loading tableLoading={tableLoading} />}
      {!tableLoading && (
        <MuiThemeProvider theme={theme}>
          <MaterialTable
            title="Table Title"
            style={{
              width: "100%",
              display: "inline-table",
            }}
            data={data}
            columns={columns}
            detailPanel={[
              {
                tooltip: "Show body",
                render: (rowData) => {
                  return (
                    <div
                      style={{
                        margin: "20px",
                        fontSize: 30,
                        textAlign: "left",
                        color: "black",
                        backgroundColor: "white",
                      }}
                    >
                      {rowData.body}
                    </div>
                  );
                },
              },
            ]}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((res, rej) => {
                  const updatedRows = [...data, newRow];
                  setDataList(updatedRows);
                  res();
                  console.log(newRow);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((res, rej) => {
                  console.log(selectedRow);
                  const deleteIndex = selectedRow.tableData.id;
                  const updatedRows = [...data];
                  updatedRows.splice(deleteIndex, 1);
                  setDataList(updatedRows);
                  res();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((res, rej) => {
                  console.log(updatedRow);
                  handleTableDataEdit(
                    updatedRow.userId,
                    updatedRow.id,
                    updatedRow.title,
                    updatedRow.body
                  );
                  res();
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
              selection: true,
              paging: false,
              headerStyle: {
                position: "sticky",
                top: "0",
                //backgroundColor: "#039be5",
              },
              maxBodyHeight: "60vh",
            }}
            actions={[
              {
                tooltip: "Remove All Selected Users",
                icon: "delete",
                onClick: (evt, data) => {
                  alert("You want to delete " + data.length + " rows");
                  console.log(data);
                },
              },

              {
                icon: () =>
                  preferDarkMode ? <Brightness7Icon /> : <Brightness4Icon />,
                tooltip: "Toggle Light/Dark Mode",
                onClick: handleDarkModeChange,
                isFreeAction: true,
              },
            ]}
          />
        </MuiThemeProvider>
      )}
    </>
  );
};

export default JsonTable;
