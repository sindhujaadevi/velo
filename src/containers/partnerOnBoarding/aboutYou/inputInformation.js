import React from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {
  fetchCustomerData,
  cutomerInputData
} from '../../../ducks/partnerOnBoarding/fetchApplicationData'
import TableDataToRender from '../tableRender'
import BackgroundInformation from './backgroundInformation'
import PopUpComponent from '../../partnerOnBoarding/popUpComponent'
import countryCode from '../../../constants/partnerOnBoarding/countryCode'
import VLButton from '../../../baseComponents/VLButton'
import '../../../styles/theme/partnerOnBoarding/aboutYou/inputInformation.css'
import '../../../styles/theme/common/VLButton.css'

const validate = values => {
  const errors = {}
  const requiredFields = ['FirstName', 'LastName', 'EmailAddress']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.EmailAddress &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.EmailAddress)
  ) {
    errors.EmailAddress = 'Invalid email address'
  }
  return errors
}

const initialData = [
  { identificationData: 'IDENTIFICATION' },
  { personalInfoData: 'PERSONAL INFORMATION' },
  { employmentInfoData: 'EMPLOYMENT INFORMATION' },
  { financialInfoData: 'FINANCIAL INFORMATION' }
]

const addressData = [
  { currentAddress: 'CURRENT RESIDENCE ADDRESS' },
  { mailingAddress: 'MAILING ADDRESS' }
]

const accountUsageData = [{ accountUsageData: 'ACCOUNT USAGE' }]

class InputInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentName: 'initial',
      dataToRender: initialData,
      alertOpen: false,
      popUpContent: ''
    }
  }
  handleClick = popUpContent => {
    this.setState({ alertOpen: !this.state.alertOpen, popUpContent })
  }
  submitForm = () => {
    window.scrollTo(0, 0);
    let componentName = this.state.componentName;
    let dataToRender = this.state.dataToRender.slice();
    if (componentName === 'initial') {
      componentName = 'address'
      dataToRender = addressData
    } else if (componentName === 'address') {
      componentName = 'accountUsage'
      dataToRender = accountUsageData
    } else if (componentName === 'accountUsage') {
      componentName = 'w8ben'
      const popUpContent = {
        title: 'Important Reminder',
        titleId: "importantReminder",
        messageId: 'reminderMessage',
        message: `<p>1. Maintenance fee of $10 will be charged per month statement cycle if you do not maintain a minimum average monthly balance of $2,500 in your Velo Premier Checking account during the statement cycle.</p>
        <p>2. Accounts that are not funded within 90 days, or that at any time maintain a $0 balance for 90 days or more, will be automatically closed.</p>`,
        buttonLabelId: 'gotIt',
        buttonLabel:'Got It',
      }
      this.setState({ alertOpen: true, popUpContent })
    }
    let updatedInput = {
      inputData: this.props.updatedInput
    }

    this.setState({ componentName, dataToRender })
    this.props.cutomerInputData(updatedInput)
  }
  render() {
    const { handleSubmit } = { ...this.props };
    const { alertOpen, popUpContent, componentName, dataToRender } = { ...this.state };
    return (
      <div className='import-information'>
        {alertOpen ? (
          <PopUpComponent
            handleClick={this.handleClick}
            popUpContent={popUpContent}
            componentName={componentName}
          />
        ) : null}
        <form onSubmit={handleSubmit(this.submitForm)}>
          <TableDataToRender
            componentName={componentName}
            dataToRender={dataToRender}
            handleClick={this.handleClick}
          />
          {componentName === 'address' ? (
            <BackgroundInformation handleClick={this.handleClick} />
          ) : null}
          <div style={{ margin: '28px 0px', textAlign: 'center' }}>
            <VLButton title={['confirm', 'Confirm >']} secondary />
          </div>
        </form>
      </div>
    )
  }
}

InputInformation = reduxForm({
  form: 'InputInformation',
  validate,
  enableReinitialize: true
})(InputInformation)

const selector = formValueSelector('InputInformation')

const mapStateToProps = state => {
  let customerInfoObject
  if (
    state.prefillApplicationData &&
    state.prefillApplicationData.customerDataFromPartner
  ) {
    let stateValue = {
      ...state.prefillApplicationData.customerDataFromPartner
    }

    let customerData = {
      ...stateValue.Customer
    }

    let IDAddress,
      pinyinAddress1,
      pinyinAddress2,
      pinyinAddress3,
      pinyinAddress11,
      pinyinAddress22,
      pinyinAddress33,
      ChineseName,
      FirstName,
      LastName

    customerData.Names.map(name => {
      if (name.Type === 'English') {
        FirstName = name.FirstName
        LastName = name.LastName
      } else if ((name.Type = 'Chinese')) {
        ChineseName = `${name.FirstName} ${name.LastName}`
      }
    })

    customerData.Addresses.map(address => {
      if (address.Type === 'PrimaryChineseAddress') {
        IDAddress = address.StreetAddress1
      } else if (address.Type === 'PrimaryAddress') {
        pinyinAddress1 = address.StreetAddress1
        pinyinAddress2 = address.StreetAddress2
        pinyinAddress3 = address.StreetAddress3
      } else if (address.Type === 'MailingAddress') {
        pinyinAddress11 = address.StreetAddress1
        pinyinAddress22 = address.StreetAddress2
        pinyinAddress33 = address.StreetAddress3
      }
    })

    let countryCodeValue = customerData.CitizenshipCode

    customerInfoObject = {
      Type: stateValue.Documents[0].DocumentName,
      Citizenship: countryCode[countryCodeValue],
      Country: countryCode[countryCodeValue],
      MailingCountry: countryCode[countryCodeValue],
      ChineseName,
      FirstName,
      LastName,
      DateOfBirth: customerData.DateOfBirth,
      IDNumber: customerData.NonResidentAccountInformation.ForeignTaxNumber,
      IDAddress: IDAddress,
      Gender: customerData.Gender,
      MaritalStatus: customerData.MaritalStatus,
      CountryResidentCode: customerData.CountryResidentCode,
      MobileNumber: `${customerData.ContactInformation[0].CountryCode} ${
        customerData.ContactInformation[0].Number
        }`,
      CountryCode: customerData.ContactInformation[0].CountryCode,
      EmailAddress: customerData.EmailAddress,
      EmploymentOrSchool: customerData.EmploymentOrSchool,
      Occupation: customerData.Occupation,
      YearEmployed: customerData.YearEmployed,
      Position: customerData.Position,
      CompanyName: customerData.Employer,
      AnnualIncome: customerData.AnnualIncome,
      TotalNetWorth: customerData.TotalNetWorth,
      pinyinAddress1,
      pinyinAddress2,
      pinyinAddress3,
      pinyinAddress11,
      pinyinAddress22,
      pinyinAddress33,
      TenPercentShareHolder: customerData.TenPercentShareHolder,
      IsPoliticallyExposedPerson: customerData.IsPoliticallyExposedPerson,
      PurposeOfAccount:
        customerData.NonResidentAccountInformation.PurposeOfAccount,
      SourceOfWealth: customerData.NonResidentAccountInformation.SourceOfWealth,
      IncomingWiresLimit:
        customerData.NonResidentAccountInformation.IncomingWiresLimit,
      OutgoingWiresLimit:
        customerData.NonResidentAccountInformation.OutgoingWiresLimit
    }
  }
  const updatedInput = selector(
    state,
    'Type',
    'ChineseName',
    'Citizenship',
    'Country',
    'MailingCountry',
    'FirstName',
    'LastName',
    'DateOfBirth',
    'IDNumber',
    'IDAddress',
    'Gender',
    'MaritalStatus',
    'CountryResidentCode',
    'MobileNumber',
    'EmailAddress',
    'EmploymentOrSchool',
    'Occupation',
    'YearEmployed',
    'Position',
    'CompanyName',
    'AnnualIncome',
    'TotalNetWorth',
    'pinyinAddress1',
    'pinyinAddress2',
    'pinyinAddress3',
    'pinyinAddress11',
    'pinyinAddress22',
    'pinyinAddress33',
    'TenPercentShareHolder',
    'IsPoliticallyExposedPerson',
    'PurposeOfAccount',
    'SourceOfWealth',
    'IncomingWiresLimit',
    'OutgoingWiresLimit'
  )
  return {
    initialValues: customerInfoObject,
    updatedInput
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    fetchCustomerData: () => {
      return dispatch(fetchCustomerData())
    },
    cutomerInputData: inputData => {
      return dispatch(cutomerInputData(inputData))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputInformation)
