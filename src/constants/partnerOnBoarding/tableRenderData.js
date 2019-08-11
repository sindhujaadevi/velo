import React from 'react'
import confirmConstant from '../../constants/partnerOnBoarding/confirmImport'
import {
  RenderTextField,
  RenderSelectField
} from '../../containers/partnerOnBoarding/fieldRender'

export default {
  tableData: {
    identificationData: {
      Type: {
        label: 'Type',
        renderComponent: RenderTextField,
      },

      Citizenship: {
        label: 'Citizenship',
        renderComponent: RenderTextField
      },

      ChineseName: {
        label: 'Chinese Name',
        renderComponent: RenderTextField
      },

      FirstName: {
        label: 'First Name',
        renderComponent: RenderTextField
      },

      LastName: {
        label: 'Last Name',
        renderComponent: RenderTextField

      },

      DateOfBirth: {
        label: 'Date of Birth',
        renderComponent: RenderTextField
      },

      IDNumber: {
        label: 'ID Number',
        renderComponent: RenderTextField
      },

      IDAddress: {
        label: 'ID Address',
        renderComponent: RenderTextField
      }
    },

    personalInfoData: {

      Gender: {
        label: 'Gender',
        renderComponent: RenderSelectField,
        options: confirmConstant.gender
      },

      MaritalStatus: {
        label: 'Marital Status',
        renderComponent: RenderSelectField,
        options: confirmConstant.maritalStatus
      },

      CountryResidentCode: {
        label: 'Current Country of legal residence',
        renderComponent: RenderTextField
      },

      MobileNumber: {
        label: 'Mobile Number',
        renderComponent: RenderTextField
      },

      EmailAddress: {
        label: 'Email Address',
        renderComponent: RenderTextField
      }
    },

    employmentInfoData: {
      EmploymentOrSchool: {
        label: 'Employment Status',
        renderComponent: RenderSelectField,
        options: confirmConstant.employmentStatus
      },

      Occupation: {
        label: 'Occupation',
        renderComponent: RenderSelectField,
        options: confirmConstant.occupation
      },

      YearEmployed: {
        label: 'Years of Employment',
        renderComponent: RenderTextField
      },

      Position: {
        label: 'Position',
        renderComponent: RenderTextField
      },

      CompanyName: {
        label: 'Company Name',
        renderComponent: RenderTextField
      }
    },

    financialInfoData: {

      AnnualIncome: {
        label: 'Approximate Annual Net Income',
        renderComponent: RenderSelectField,
        options: confirmConstant.annualIncome
      },

      TotalNetWorth: {
        label: 'Approximate Total Net Worth',
        renderComponent: RenderSelectField,
        options: confirmConstant.totalNetWorth
      }
    },

    currentAddress: {

      Country: {
        label: 'Country',
        renderComponent: RenderTextField
      },

      pinyinAddress1: {
        label: 'Pinyin address 1',
        renderComponent: RenderTextField
      },

      pinyinAddress2: {
        label: 'Pinyin address 2',
        renderComponent: RenderTextField
      },

      pinyinAddress3: {
        label: 'Pinyin address 3',
        renderComponent: RenderTextField
      }
    },

    mailingAddress: {

      mailingCountry: {
        label: 'Country',
        renderComponent: RenderTextField
      },

      pinyinAddress11: {
        label: 'Pinyin address 1',
        renderComponent: RenderTextField
      },

      pinyinAddress22: {
        label: 'Pinyin address 2',
        renderComponent: RenderTextField
      },

      pinyinAddress33: {
        label: 'Pinyin address 3',
        renderComponent: RenderTextField
      }
    },

    accountUsageData: {

      PurposeOfAccount: {
        label: 'What is the primary purpose for this account？',
        renderComponent: RenderSelectField,
        options: confirmConstant.purposeOfWealth
      },

      SourceOfWealth: {
        label: 'What is your primary source of income?',
        renderComponent: RenderSelectField,
        options: confirmConstant.sourceOfWealth
      },

      IncomingWiresLimit: {
        label:
          'How much do you expect to receive monthly in this account via international wire transfers？',
        renderComponent: RenderTextField
      },

      OutgoingWiresLimit: {
        label:
          'How much do you expect to send monthly in this account via international wire transfers?',
        renderComponent: RenderTextField
      }
    }
  }
}
