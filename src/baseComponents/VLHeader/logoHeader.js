import React from "react";
import Logo from "../../assets/common/velo_white.png";
import "../../styles/theme/common/logoHeader.css";

const LogoHeader = () => {
  return (
    <div className="logo-header">
      <img src={Logo} alt="Velo logo" className="logo-img" />
    </div>
  );
};

export default LogoHeader;
