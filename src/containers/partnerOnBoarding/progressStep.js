import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { useQontoStepIconStyles, QontoConnector } from '../../styles/theme/partnerOnBoarding/progressStepCSS'

const dotImg = require('../../assets/partnerOnBoarding/progressStep/copy-2.png')

export default function ProgressStep(props) {
  const [activeStep, setActiveStep] = useState(1)
  const steps = {
    aboutYou: 'About You',
    termsAgreements: 'Terms Agreements',
    submit: 'Submit'
  }
  const classes = useQontoStepIconStyles()

  useEffect(
    () => {
      if (props.activeStep) {
        return setActiveStep(props.activeStep)
      }
    },
    [props.activeStep]
  )

  function QontoStepIcon(props) {
    const { active, completed } = props

    return (
      <div
        className={`${classes.root} ${classes.active}`}
      >
        {completed ? (
          <div className={classes.completed}>
            <img src={dotImg} alt='dotImg' className={classes.dotImg} />
          </div>
        ) : (
            <div className={classes.circle} />
          )}
      </div>
    )
  }

  return (
    <Stepper
      className={classes.alternativeLabel}
      alternativeLabel
      connector={<QontoConnector />}
    >
      {Object.entries(steps).map((label, index) => {
        const labelProps = {}
        labelProps.optional = (
          <Typography className={classes.body1}>
            <FormattedMessage id={label[0]} defaultMessage={label[1]} />
          </Typography>
        )
        return (
          <Step key={label}>
            <StepLabel
              {...labelProps}
              completed={activeStep === index + 1}
              StepIconComponent={QontoStepIcon}
            />
          </Step>
        )
      })}
    </Stepper>
  )
}
