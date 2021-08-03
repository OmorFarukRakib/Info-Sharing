import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

import { AlertTitle } from "@material-ui/lab";
import ClipLoader from "react-spinners/ClipLoader";

export const ErrorMessage = ({ error, handleClearMessage }) => {
  return (
    <>
      <Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          Sorry! Something Went wrong! — <strong> Please try again!</strong>
        </Alert>
      </Collapse>
    </>
  );
};
export const WarningMessageForForAddRequiredData = ({
  error,
  handleClearMessage,
}) => {
  return (
    <>
      <Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error!</AlertTitle>
          <strong> Please Enter All the information to create new Note!</strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const EditSuccessMessage = ({
  editSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={editSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Update Successful!! —{" "}
          <strong> Note ID: {lastUpdateId} has been modified! </strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const DeleteSuccessMessage = ({
  deleteSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={deleteSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Delete Successful!! —{" "}
          <strong> Note ID: {lastUpdateId} has been deleted! </strong>
        </Alert>
      </Collapse>
    </>
  );
};
export const AddSuccessMessage = ({
  addSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={addSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          New Note Add Successful!! —{" "}
          <strong> Note ID: {lastUpdateId} has been added! </strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const Loading = ({ tableLoading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader
        //color={color}
        loading={tableLoading}
        // css=
        // size={80}
      />
    </div>
  );
};
