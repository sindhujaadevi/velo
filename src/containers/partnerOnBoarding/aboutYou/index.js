import React from "react";
import Header from "../../../components/common/header";
import Footer from "../../../components/common/footer";
import InputInformation from "./inputInformation";
import ProgressStep from "../progressStep";

function AboutYou() {
  return (
    <>
      <Header />
      <ProgressStep style={{ margin: "20px" }} />
      <InputInformation style={{ margin: "20px" }} />
      <Footer />
    </>
  );
}

export default AboutYou;
