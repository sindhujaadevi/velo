import React from "react";
import logo from "../../assets/common/logo-initial.png";
import { FormattedMessage } from "react-intl";
import "../../styles/theme/common/header.css";

class Header extends React.Component {
  render() {
    return (
         <div className="application-header">
             <img src={logo} className="account-header-logo" alt="Account Header Logo"/>
             <FormattedMessage id="velo-account-header" defaultMessage="Application for Velo Premier Checking Account"/>
         </div>
    );
  }
}

export default Header;
