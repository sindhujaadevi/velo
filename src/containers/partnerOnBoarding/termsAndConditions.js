import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";

import Checkbox from "@material-ui/core/Checkbox";
import ProgressStep from "./progressStep";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import VLButton from "../../baseComponents/VLButton";
import PopUpComponent from "./popUpComponent";

import { fetchTCDataValue } from "../../ducks/partnerOnBoarding/TCData";
import "../../styles/theme/partnerOnBoarding/termsAndConditions.css";

const content = {
  message: `<p>By indicating that you do not agree to the Terms and Conditions, your application will be canceled</p>`,
  messageId: 'termsAgreementsAlert',
  buttonLabelId:'backToTC',
  buttonLabel:"Back to Terms and Conditions",
};

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexArray: [],
      alertOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchTCDataValue();
  }

  handleChange = name => {
    let selectedIndexArray = [...this.state.selectedIndexArray];
    if (selectedIndexArray.includes(name)) {
      selectedIndexArray = [];
    } else {
      selectedIndexArray.push(name);
    }
    this.setState({ selectedIndexArray });
  };

  handleAgree = () => this.props.history.push('/received_application');

  handleClick = () => {
    this.setState({ alertOpen: !this.state.alertOpen, content });
  };

  render() {
    let tc = this.props.TCData.tcText;
    let tcHeading = ["elecSigCon", "termsCond", "estateAccept"];
    
    return (
      <div>
        {this.state.alertOpen ? (
          <PopUpComponent
            handleClick={this.handleClick}
            popUpContent={content}
            buttonLabel={["backToTC", "Back to Terms and Conditions"]}
            // componentName = {this.state.componentName}
          />
        ) : null}
        <Header />
        <ProgressStep handleNext={2} />
        {tc && (
          <div className="termsAndConditions">
            <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
              {tcHeading.map((keyName, index) => {
                return (
                  <li key={keyName} style={{ marginTop: "20px" }}>
                    <label style={{ display: "flex" }}>
                      <span>
                        <Checkbox
                          style={{ paddingTop: 0, color: "#00fffc" }}
                          onChange={() => this.handleChange(keyName)}
                          checked={this.state.selectedIndexArray.includes(keyName) == true}
                        />
                      </span>
                      <span
                        dangerouslySetInnerHTML={{ __html: tc[keyName].value }}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
            <VLButton
              secondary
              title={["agreeAndSubmit", "I Agree and Submit >"]}
              disabled={this.state.selectedIndexArray.length !== 3}
              onClick={this.handleAgree}
            />
            <div
              style={{ textAlign: "center", color: "#00fffc", margin: 20 }}
              onClick={this.handleClick}
            >
              <FormattedMessage
                id="disagree"
                defaultMessage="I Don't Agree >"
              />
            </div>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    TCData: state.TCData
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchTCDataValue: () => {
      return dispatch(fetchTCDataValue());
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsAndConditions));
