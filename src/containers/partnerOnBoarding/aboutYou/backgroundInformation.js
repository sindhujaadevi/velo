import React from "react";
import { Field } from "redux-form";
import { FormattedMessage } from "react-intl";
import { renderRadioButton } from "../fieldRender";
import SectionHeading from "../sectionHeading";

const backgroundData = {
  TenPercentShareHolder:
    "Are you a 10% (or more) shareholder in a publicly-owned company?",
  IsPoliticallyExposedPerson:
    "Are you, your spouse, or any other immediate family members, including parents, in-laws, siblings, and dependents, a current senior political figure (SPF) or a politically exposed persion person (PEP)?"
};

const backgroundContent = {
  title: "Learn more",
  titleId: "learnMore",
  messageId:"learnMoreAlert",
  message: `<p>Let’s keep connected! By providing us with your mobile number and e-mail address, you expressly consent to us contacting you by phone, SMS text message, and e-mail regarding your application for an account with Velo by East West Bank™. We will also use this same information to keep in touch once your account has been opened.</p><p>In addition to personal contact by one of our Call Center Agents, your consent also allows us to use SMS text messaging, artificial or pre-recorded messages, and automatic dialing technology for informational and account service calls. This may also include contact from companies working on our behalf to service your accounts. Message and data rates may apply. You may contact us at any time to change these preferences.</p>`,
  buttonLabelId:'gotIt',
  buttonLabel:'Got It'
};

export default function BackgroundInformation({ handleClick }) {
  return (
    <div>
      {SectionHeading({ backgroundInfo: "BACKGROUND INFORMATION" })}
      {Object.entries(backgroundData).map((background, index) => {
        return (
          <div style={{ borderBottom: "1px solid white" }} key={index}>
            <div style={{ padding: "15px" }}>
              <div><FormattedMessage id={background[0]} defaultMessage={background[1]} /></div>
              <Field
                name={background[0]}
                component={renderRadioButton}
              />
            </div>
          </div>
        );
      })}
      <div style={{ padding: "15px" }}>
        <FormattedMessage
          id="agreeContent"
          defaultMessage="By confirming, you agree that the above information is accurate and authorize Velo by East West Bank™ to use this, and other information in this application, to establish your account. By providing your email address and mobile phone number you agree to us using this information to contact you regarding this application and all of your accounts with us."
        />
        <div
          style={{ color: "#00ddf4" }}
          onClick={() => handleClick(backgroundContent)}
        >
          <FormattedMessage id="learnMore" defaultMessage="Learn More" />
        </div>
      </div>
    </div>
  );
}
