import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const popupStyles = makeStyles({
  paper: {
    margin: 30,
    paddingRight: 20,
    // fontFamily: 'NunitoSans',
    position: "relative"
  },
  dialogTitle: {
    textAlign: "center",
    color: "#677889",
    fontSize: "14px",
    letterSpacing: "2px",
    marginRight: "-30px",
    textTransform: 'uppercase',
  },
  dialogContentText: {
    fontSize: 14,
    lineHeight: "20px",
    color: "#0d1f31"
  },
  simpleDialog: {
    fontSize: "20px",
    lineHeight: "28px",
    color: "#0d1f31",
    marginRight: 0
  },
  actionRoot: {
    padding: "24px 0px 24px 15px"
  },
  simpleRoot: {
    padding: "5px 0px 24px 15px"
  },
  dialogContent:{
    padding: "0px 24px 0px"
  },
  simpleContent:{
    padding: "20px 0px 0px 20px"
  }
});

export default popupStyles;
