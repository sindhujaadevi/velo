import React from "react";
import { FormattedMessage } from "react-intl";
import "../../styles/theme/common/footer.css";

const footerRoutes = [
  [
    "privacyPolicy",
    "Privacy Policy",
    "https://www.velobank.cn/en/privacy-and-security.html?channel=futu&vid=d1293b8863ad6930a57d2330d17a0462&mid=d1293b8863ad6930a57d2330d17a0462"
  ],
  [
    "termsAndConditions",
    "Terms and Conditions",
    "https://www.velobank.cn/en/terms-and-conditions.html?channel=futu&vid=d1293b8863ad6930a57d2330d17a0462&mid=d1293b8863ad6930a57d2330d17a0462"
  ],
  [
    "depositAccountAgreement",
    "Deposit Account Agreement",
    "https://www.velobank.cn/en/deposit-account-agreement.html?channel=futu&vid=d1293b8863ad6930a57d2330d17a0462&mid=d1293b8863ad6930a57d2330d17a0462"
  ]
];

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-top">
        <div>
          {footerRoutes.map((topic, index) => {
            return (
              <span key={index}>
                <span className="footer-links">
                  <a href={topic[2]}>
                    <FormattedMessage
                      id={topic[0]}
                      defaultMessage={topic[1]}
                    />
                  </a>
                </span>
                {index <= footerRoutes.length - 2 && " | "}
              </span>
            );
          })}
        </div>
        <p className="footer-bottom">
          <FormattedMessage
            id="footerContent"
            defaultMessage="Member of the Federal Deposit Insurance Corporation"
          />
        </p>
      </div>
    );
  }
}

export default Footer;
