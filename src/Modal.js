import React from "react";
import { Modal } from "react-bootstrap";

import JsonTable from "./Components/JsonPlaceholderTable/MaterialTable";
import VIPNoteTable from "./Components/VIPNoteTable/MaterialTable";
import "./customClass.css";
const MyVerticallyCenteredModal = (props) => {
  return (
    <>
      <div>
        <Modal
          {...props}
          size="lg"
          //aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="my-modal"
        >
          <Modal.Header
            centered
            closeButton
            style={{
              background: "#E6EAED",
              height: "4rem",
            }}
          >
            <Modal.Title centered style={{ paddingLeft: "40%" }}>
              <h2>
                <strong>Note Entries</strong>
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton style={{ background: "#E6EAED" }}>
            {props.modalSelect === 1 ? <JsonTable /> : <VIPNoteTable />}
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
};

export default MyVerticallyCenteredModal;
