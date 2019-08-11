import React, { useState } from "react";
import { withRouter } from "react-router";
import { FormattedHTMLMessage, FormattedMessage } from "react-intl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VLButton from "../../baseComponents/VLButton";
import UseStyles from "../../styles/theme/partnerOnBoarding/popUpComponentCSS";

function PopUpComponent(props) {
  console.log("TCL: PopUpComponent -> props", props)
  const [open, setOpen] = useState(true);
  const {popUpContent: {title, titleId, messageId, message, buttonLabel, buttonLabelId}, componentName } ={...props};
  const classes = UseStyles();
  console.log("TCL: PopUpComponent -> title, titleId, messageId, message}, componentName", title, titleId, messageId, message, componentName)

  const handleClick = () => {
    componentName === "w8ben"
      ? props.history.push("/W_8BEN")
      : props.handleClick();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        classes={{
          paper: classes.paper
        }}
        style={title ? { top: "-130px" } : null}
      >
        {title && (
          <DialogTitle
            disableTypography={true}
            classes={{
              root: classes.dialogTitle
            }}
          >
            <FormattedMessage id={titleId} defaultMessage={title}/>
          </DialogTitle>
        )}
        <DialogContent
          classes={
            title
              ? { root: classes.dialogContent }
              : { root: classes.simpleContent }
          }
          style={
            title ? { maxHeight: "218px" } : { textAlign: "center" }
          }
        >
          <DialogContentText
            classes={
              title
                ? { root: classes.dialogContentText }
                : { root: classes.simpleDialog }
            }
          >
            <FormattedHTMLMessage
              id={messageId}
              defaultMessage={message}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions
          classes={
            title
              ? { root: classes.actionRoot }
              : { root: classes.simpleRoot }
          }
        >
          <VLButton
            title={[buttonLabelId,buttonLabel]}
            onClick={() => handleClick()}
            secondary={false}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(PopUpComponent);
