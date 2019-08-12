import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const popUpStyles = makeStyles({
  paper: {
    margin: 30,
    paddingRight: 20,
    // fontFamily: 'NunitoSans',
    position: "relative"
  },
  withTitle: {
    textAlign: "center",
    color: "#677889",
    fontSize: "14px",
    letterSpacing: "2px",
    marginRight: "-30px",
    textTransform: 'uppercase',
  },
  withTitleContentText: {
    fontSize: 14,
    lineHeight: "20px",
    color: "#0d1f31"
  },
  commonContentText: {
    fontSize: "20px",
    lineHeight: "28px",
    color: "#0d1f31",
    marginRight: 0
  },
  withTitleAction: {
    padding: "24px 0px 24px 15px"
  },
  commonAction: {
    padding: "5px 0px 24px 15px"
  },
  withTitleContent: {
    padding: "0px 24px 0px",
    maxHeight: "218px"
  },
  commonContent: {
    padding: "20px 0px 0px 20px",
    textAlign: "center"
  },
  withTitleTop: {
    top: '-130px'
  }
});

export default popUpStyles;
