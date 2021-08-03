import { TextField } from "@material-ui/core";

const tableColumns = [
  {
    title: "note_id",
    field: "note_id",
    editable: "never",
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
    },

    editComponent: ({ value, onChange }) => (
      <TextField
        autoFocus={true}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
  },
  {
    title: "title",
    field: "title",
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      // backgroundColor: "#039be5",
    },
    editComponent: ({ value, onChange }) => (
      <TextField
        autoFocus={true}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
  },
  {
    title: "event_id",
    field: "event_id",
    cellStyle: {
      textAlign: "center",
      width: "10%",
    },
    headerStyle: {
      textAlign: "center",
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
    title: "company_id",
    field: "company_id",
    cellStyle: {
      width: "10%",
      textAlign: "center",
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
  {
    title: "product_id",
    field: "product_id",
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
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
    title: "content",
    field: "content",
    cellStyle: {
      textAlign: "center",
      width: "25%",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
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
    title: "additional_info",
    field: "additional_info",
    cellStyle: {
      textAlign: "center",
      width: "25%",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
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
];
export default tableColumns;
