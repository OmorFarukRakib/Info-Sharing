import React from "react";

import VIPNoteTable from "./Components/VIPNoteTable/MaterialTable";
import ProductTable from "./Components/ProductTable.js/MaterialTable";
import EventTable from "./Components/EventTable/MaterialTable";
import CompanyTable from "./Components/CompanyTable/MaterialTable";
import UserTable from "./Components/UserTable/MaterialTable";
import "./customClass.css";
const TableBodyContainer = (props) => {
  return (
    <>
      <div className="table-wrapper">
        {props.modalSelect === 1 && <VIPNoteTable />}
        {props.modalSelect === 2 && <ProductTable />}
        {props.modalSelect === 3 && <EventTable />}
        {props.modalSelect === 4 && <CompanyTable />}
        {props.modalSelect === 5 && <UserTable />}
      </div>
    </>
  );
};

export default TableBodyContainer;

// <div>
//   <Modal
//     {...props}
//     size="lg"
//     //aria-labelledby="contained-modal-title-vcenter"
//     centered
//     dialogClassName="my-modal"
//   >
//     <Modal.Header
//       centered
//       closeButton
//       style={{
//         background: "#E6EAED",
//         height: "4rem",
//       }}
//     >
//       <Modal.Title centered style={{ paddingLeft: "40%" }}>
//         <h2>
//           {props.modalSelect === 1 && <strong>Note Entries</strong>}
//           {props.modalSelect === 2 && <strong>Product Entries</strong>}
//           {props.modalSelect === 3 && <strong>Event Entries</strong>}
//           {props.modalSelect === 4 && <strong>Company Entries</strong>}
//           {props.modalSelect === 5 && <strong>User Entries</strong>}
//         </h2>
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body closeButton style={{ background: "#E6EAED" }}>
//       {props.modalSelect === 1 && <VIPNoteTable />}
//       {props.modalSelect === 2 && <ProductTable />}
//       {props.modalSelect === 3 && <EventTable />}
//       {props.modalSelect === 4 && <CompanyTable />}
//       {props.modalSelect === 5 && <UserTable />}
//     </Modal.Body>
//     {/* <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//           </Modal.Footer> */}
//   </Modal>
// </div>;
