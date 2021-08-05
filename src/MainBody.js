import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import TableBodyContainer from "./Modal";
import "./customClass.css";

const MainBody = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [modalSelect, setModalSelect] = useState(1);

  const onVIPPaperClick = () => {
    setModalSelect(1);
    setModalShow(true);
  };
  const onProductPaperClick = () => {
    setModalSelect(2);
    setModalShow(true);
  };
  const onEventPaperClick = () => {
    setModalSelect(3);
    setModalShow(true);
  };
  const onCompanyPaperClick = () => {
    setModalSelect(4);
    setModalShow(true);
  };
  const onUserPaperClick = () => {
    setModalSelect(5);
    setModalShow(true);
  };
  return (
    <>
      <div
        className="main-body"
        // style={{ background: "#202124", height: "100vh" }}
      >
        <div className="body-button-wrap">
          <Button
            variant="contained"
            color={modalSelect === 1 ? "#202124" : "secondary"}
            //style={{ height: `${modalSelect === 1}  ? "10rem" : null}` }}
            className={modalSelect === 1 && "custom-btn"}
            background={modalSelect === 1 ? "#202124" : "secondary"}
            onClick={onVIPPaperClick}
          >
            <center>Note Table</center>
          </Button>
          <Button
            variant="contained"
            color={modalSelect === 2 ? "#202124" : "secondary"}
            className={modalSelect === 2 && "custom-btn"}
            background={modalSelect === 1 ? "#202124" : "secondary"}
            onClick={onProductPaperClick}
          >
            <center>Product Table</center>
          </Button>
          <Button
            variant="contained"
            className={modalSelect === 3 && "custom-btn"}
            color={modalSelect === 3 ? "#202124" : "secondary"}
            background={modalSelect === 1 ? "#202124" : "secondary"}
            onClick={onEventPaperClick}
          >
            <center>Event Table</center>
          </Button>
          <Button
            variant="contained"
            className={modalSelect === 4 && "custom-btn"}
            color={modalSelect === 4 ? "#202124" : "secondary"}
            background={modalSelect === 1 ? "#202124" : "secondary"}
            onClick={onCompanyPaperClick}
          >
            <center>Company Table</center>
          </Button>
          <Button
            variant="contained"
            className={modalSelect === 5 && "custom-btn"}
            color={modalSelect === 5 ? "#202124" : "secondary"}
            background={modalSelect === 1 ? "#202124" : "secondary"}
            onClick={onUserPaperClick}
          >
            <center>User Table</center>
          </Button>
        </div>

        <TableBodyContainer
          modalSelect={modalSelect}
          show={ModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default MainBody;
