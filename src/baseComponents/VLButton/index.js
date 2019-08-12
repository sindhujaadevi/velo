import React from "react";
import PropTypes from "prop-types";
import "../../styles/theme/common/VLButton.css";
import { FormattedMessage } from "react-intl";

export default function VLButton({
  secondary,
  disabled,
  submit,
  onClick,
  title
}) {
  let controlClasses = "button";
  controlClasses += disabled ? " button-disabled" : secondary ? " button-secondary" : " button-primary";

  if (submit) {
    return (
      <input
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={controlClasses}
        value={title[0]}
      />
    );
  }

  return (
    <button disabled={disabled} onClick={onClick} className={controlClasses}>
      <FormattedMessage id={title[0]} defaultMessage={title[1]} />
    </button>
  );
}
VLButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  submit: PropTypes.bool,
  title: PropTypes.array
};
