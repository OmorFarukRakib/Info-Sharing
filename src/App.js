import React from "react";
import { Button } from "@material-ui/core";
import MainBody from "./MainBody";
import "./customClass.css";

const App = () => {
  return (
    <>
      <div className="nav-wrapper" style={{ position: "relative" }}>
        <div className="nav-title">
          <h2>VIP Note</h2>
        </div>
        <Button
          variant="contained"
          color="#4E4F50"
          style={{
            justifySelf: "end",
            marginRight: "1rem",
            position: "absolute",
            maxHeight: "4vh",
            width: "4rem",
            maxWidth: "4rem",
          }}
        >
          Logout
        </Button>
      </div>
      <div className="body-wrapper">
        <div
          className="profile-nav"
          style={{
            border: "1px #5E5E5E solid",
            background: "#2A2B2E",
            // minWidth: "8rem",
          }}
        >
          Profile Name
        </div>
        <MainBody />
      </div>
      <div className="footer">
        <p>Ultra-X Asia Pacific</p>
      </div>
    </>
  );
};

export default App;
