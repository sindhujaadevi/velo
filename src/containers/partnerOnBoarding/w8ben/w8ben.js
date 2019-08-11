import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { fetchw8benDataValue } from "../../../ducks/partnerOnBoarding/w8benData";
import SectionHeading from "../sectionHeading";
import PopUpComponent from "../../partnerOnBoarding/popUpComponent";
import VLButton from "../../../baseComponents/VLButton";

import "../../../styles/theme/partnerOnBoarding/w8ben.css";

const w8benData = { w8benData: "Electronic W-8BEN Certification" };
const content = {
  message: `<p>By indicating that you do not agree to the W-8BEN, your application will be canceled.</p>`,
  messageId: 'w8benAlert',
  buttonLabelId:'backToW8ben',
  buttonLabel:"Back to W-8BEN",
};

function W8BEN(props) {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleAgreeClick = () => props.history.push("/terms_and_conditions");

  const handleClick = () => setAlertOpen(!alertOpen);

  return (
    <div style={{ marginLeft: "24px", marginRight: "24px" }}>
      {alertOpen ? (
        <PopUpComponent
          handleClick={handleClick}
          popUpContent={content}
          buttonLabel={["backToW8ben", "Back to W-8BEN"]}
        />
      ) : null}
      {props.prefilledData && props.w8benContent ?
        (<>
          {SectionHeading(w8benData)}
          <div className="field-content">
            <div className="field-data">
              <div className="field-heading">
                <FormattedMessage id="NameLine1" defaultMessage="Name (Line 1)" />
              </div>
              <p className="field-value">{`${props.prefilledData.FirstName} ${
                props.prefilledData.LastName
                }`}</p>
            </div>
            <div className="field-data">
              <div className="field-heading">
                <FormattedMessage
                  id="countryResidency"
                  defaultMessage="Country of Residency (Line 9)"
                />
              </div>
              <p className="field-value">
                {props.prefilledData.CountryResidentCode}
              </p>
            </div>
            <div className="field-data">
              <div className="field-heading">
                <FormattedMessage
                  id="USTaxPayer"
                  defaultMessage="U.S. Taxpayer #"
                />
              </div>
              <p className="field-value">{props.prefilledData.IDNumber}</p>
            </div>
            <div className="form-w8ben">
              <FormattedMessage
                id="form-w8ben"
                defaultMessage="Form W-8BEN is a form used to document your status as a non-U.S. person for tax purposes."
              />
            </div>
          </div>
          <div
            style={{ padding: '36px 0px 0px 13px' }}
            dangerouslySetInnerHTML={{ __html: props.w8benContent.preText }}
          />
          <VLButton
            title={["IAgree", "I Agree >"]}
            onClick={handleAgreeClick}
            secondary
          />
          <div style={{ textAlign: "center", padding: "15px 5px" }}>
            <FormattedMessage
              id="w8benLastContent"
              defaultMessage="Your agreement to this certification acknowledges your intent to electronically sign Form W-8BEN."
            />
          </div>
          <div
            style={{ textAlign: "center", color: "#00fffc", margin: 20 }}
            onClick={handleClick}
          >
            <FormattedMessage id="IDisagree" defaultMessage="I Don't Agree >" />
          </div>
        </>
        ) :
        <div style={{ textAlign: 'center' }}>Loading...</div>
      }
    </div>
  );
}

const mapStateToProps = ({ w8benDataContent: w8benContent, prefillApplicationData: { inputData: prefilledData } }) => ({ w8benContent, prefilledData });

const mapDispatchToProps = dispatch => dispatch(fetchw8benDataValue());

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(W8BEN));
