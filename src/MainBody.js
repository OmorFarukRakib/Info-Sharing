import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import MyVerticallyCenteredModal from "./Modal";
import "./customClass.css";

const MainBody = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [modalSelect, setModalSelect] = useState(null);

  const classes = useStyles();

  const onJsonPaperClick = () => {
    setModalShow(true);
    setModalSelect(1);
  };
  const onVIPPaperClick = () => {
    setModalSelect(2);
    setModalShow(true);
  };
  return (
    <>
      <div
        className="main-body"
        // style={{ background: "#202124", height: "100vh" }}
      >
        <Paper
          id="JsonPaper"
          className={classes.paper}
          elevation={3}
          onClick={onJsonPaperClick}
          cursor
        >
          <center>Show Json Table</center>
        </Paper>

        <Paper
          id="NotePaper"
          className={classes.paper}
          elevation={3}
          onClick={onVIPPaperClick}
          cursor
        >
          <center>Show VIP Table</center>
        </Paper>

        <div>
          <MyVerticallyCenteredModal
            modalSelect={modalSelect}
            show={ModalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  paper: {
    background: "#E6EAED",
    height: "80px",
    width: "100px",
    cursor: "pointer",
    textAlign: `center`,
    verticalAlign: `middle`,
    paddingTop: "1rem",
  },
});
export default MainBody;
