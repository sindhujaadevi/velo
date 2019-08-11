import React from "react";
import { withRouter } from "react-router";
import Header from "../../components/common/header";
import LogoHeader from "../../baseComponents/VLHeader/logoHeader";
import { FormattedMessage } from "react-intl";
import "../../styles/theme/partnerOnBoarding/welcome.css";
import VLButton from "../../baseComponents/VLButton";
import Footer from "../../components/common/footer";

function Welcome(props) {

 const handleClick = () => props.history.push("/about_you");
    return (
      <div>
        <Header />
        <LogoHeader />
        <div className="welcome-text">
          <FormattedMessage id="welcome" defaultMessage="Welcome!" />
        </div>
        <div className="info">
          <div className="info-header">
            <FormattedMessage
              id="infoHeader"
              defaultMessage="IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT"
            />
          </div>
          <div className="info-content">
            <FormattedMessage
              id="infoContent"
              defaultMessage="To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What does this mean for you: When you open an account, we will ask for your name, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other forms of identification. Applying for a Velo by East West Bank™ account does not guarantee account approval."
            />
          </div>
        </div>
        <div className="button-margin">
          <VLButton
            title={["apply-now", "Apply Now >"]}
            onClick={handleClick}
            secondary
          />
        </div>
        <Footer />
      </div>
    );
}

export default withRouter(Welcome);
