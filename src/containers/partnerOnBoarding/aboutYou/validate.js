export const validate = values => {
    const errors = {}
    const requiredFields = ['FirstName', 'LastName', 'EmailAddress', 'DateOfBirth', 'MobileNumber', 'Occupation', 'TenPercentShareHolder', 'CompanyName', 'YearEmployed', 'IsPoliticallyExposedPerson', 'SourceOfWealth',
      'PurposeOfAccount', 'IncomingWiresLimit', 'OutgoingWiresLimit'];
    const maxValue = (max) => `Must be ${max} characters or less`;
    const minValue = (min) => `Must be at least ${min}`
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
      if (field === 'FirstName' && values[field]) {
        if (values[field].length < 2)
          errors.FirstName = minValue(2);
        else if (values[field].length > 30)
          errors.FirstName = maxValue(30);
      }
      else if (field === 'LastName' && values[field]) {
        if (values[field].length < 2)
          errors.LastName = minValue(2);
        else if (values[field].length > 20)
          errors.LastName = maxValue(20);
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