import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { FormattedMessage } from "react-intl";
import "../../styles/theme/partnerOnBoarding/receivedApplication.css";

var tickImg = require("../../assets/partnerOnBoarding/receivedApplication/group-2.png");

class ReceivedApplication extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="received-application">
          <div className="img-header">
            <img className="img" src={tickImg} alt="success" />
          </div>
          <div className="received-header">
            <FormattedMessage
              id="received-header"
              defaultMessage="We have received your application for a Velo Checking account."
            />
          </div>
          <FormattedMessage
            id="content1"
            defaultMessage="We are in the process of reviewing your Velo application. We will notify you via email and SMS once a decision has been made about your application."
          />
          <hr className="hr"/>
          <FormattedMessage
            id="content2"
            defaultMessage="Apply for a Velo by East West Bank™ account does not guarantee account approval.All applications are subject to verification and approval by East West Bank."
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ReceivedApplication;
