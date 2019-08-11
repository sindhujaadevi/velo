import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles({
  icon: {
    fill: '#00fffc'
  }
})

const ThemeRadio = withStyles({
  root: {
    color: '#00ddf4',
    '&$checked': {
      color: '#00ddf4'
    }
  }
})(props => <Radio color='default' {...props} />)

export function RenderTextField (props) {
  let {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  } = { ...props }
  return (
    <TextField
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      fullWidth
      multiline
      InputLabelProps={{ style: { color: 'white', fontSize: '12px' } }}
      InputProps={{ disableUnderline: true }}
    />
  )
}

export function RenderSelectField (props) {
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
      <InputLabel style={{ color: 'white', fontSize: '12px' }} htmlFor={label}>
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
            icon: classes.icon
          }
        }}
        style={{ fontSize: '16px', color: 'white' }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
}

export function renderRadioButton ({ input, ...rest }) {
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
