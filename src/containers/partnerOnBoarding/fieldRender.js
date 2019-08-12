import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import { FormattedMessage } from 'react-intl'
import {useStyles, ThemeRadio} from '../../styles/theme/partnerOnBoarding/fieldRenderCSS'

export function RenderTextField(props) {
  let {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  } = { ...props }
  const classes = useStyles()
  return (
    <TextField
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      fullWidth
      multiline
      InputLabelProps={{
        focused: false,
        classes: {
          root: classes.inputLabel
        }
      }}
      InputProps={{ disableUnderline: true }}
    />
  )
}

export function RenderSelectField(props) {
  let {
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  } = { ...props }

  const classes = useStyles()
  return (
    <FormControl error={touched && error} fullWidth>
      <InputLabel classes={{
        root: classes.inputLabel
      }}
        focused={false}
        htmlFor={label}>
        {label}
      </InputLabel>
      <Select
        // native
        {...input}
        {...custom}
        fullWidth
        disableUnderline
        inputProps={{
          classes: {
            icon: classes.icon,
            root: classes.input
          }
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
}

export function renderRadioButton({ input, ...rest }) {
  return (
    <FormControl>
      <RadioGroup {...input} {...rest} row>
        <FormControlLabel
          value='Yes'
          control={<ThemeRadio />}
          label={<FormattedMessage id='yes' defaultMessage='Yes' />}
          labelPlacement='end'
        />
        <FormControlLabel
          value='No'
          control={<ThemeRadio />}
          label={<FormattedMessage id='no' defaultMessage='No' />}
          labelPlacement='end'
        />
      </RadioGroup>
    </FormControl>
  )
}

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {

  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
