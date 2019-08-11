import React, { useState, useEffect } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepConnector from '@material-ui/core/StepConnector'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { FormattedMessage } from 'react-intl'

var copy = require('../../assets/common/copy-2.png')

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    // width:"98%",
    left: 'calc(-50% + 0px)',
    right: 'calc(50% + 0px)'
    // left: "calc(-47%)",
    // right: "calc(47%)",
    // marginRight: -1,
    // marginLeft: -4
  },
  line: {
    height: 1,
    borderRadius: 2.5,
    borderColor: '#117bbd'
  }
})(StepConnector)

const useQontoStepIconStyles = makeStyles({
  root: {
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 4,
    height: 4,
    backgroundColor: '#00fffc',
    borderRadius: '50%'
    // marginTop: 5,
    // marginLeft: -3
  },
  completed: {
    zIndex: 1,
    // marginLeft: 7,
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#00fffc',
    position: 'relative'
  },
  copy: {
    width: 8,
    height: 8,
    objectFit: 'contain',
    position: 'absolute',
    margin: '4px 5px'
  }
})

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "90%"
//   }
// }));

export default function StepperFile (props) {
  const [activeStep, setActiveStep] = useState(1)
  const steps = getSteps()

  useEffect(
    () => {
      if (props.handleNext) {
        return setActiveStep(activeStep => props.handleNext)
      }
    },
    [props.handleNext]
  )

  // let completed = "0" ;
  function getSteps () {
    return [
      { aboutYou: 'About You' },
      { termsAgreements: 'Terms Agreements' },
      { submit: 'Submit' }
    ]
  }

  function QontoStepIcon (props) {
    const classes = useQontoStepIconStyles()
    const { active, completed } = props

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active
        })}
      >
        {completed ? (
          <div className={classes.completed}>
            <img src={copy} alt='1' className={classes.copy} />
          </div>
        ) : (
          <div className={classes.circle} />
        )}
      </div>
    )
  }

  function handleNext () {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack () {
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset () {
    // setActiveStep(0);
  }
  // if (props.handleNext == true) {
  //   setNext(isNext => true);
  // }

  // if(isNext){
  //   handleNext();
  // }

  return (
    <Stepper
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        padding: '24px 0px 0px'
      }}
      alternativeLabel
      connector={<QontoConnector />}
    >
      {steps.map((label, index) => {
        const labelProps = {}
        labelProps.optional = (
          <Typography
            style={{
              fontSize: '12px',
              textAlign: 'center',
              marginTop: -10,
              opacity: 0.5
            }}
          >
            <FormattedMessage
              id={Object.keys(label)[0]}
              defaultMessage={Object.values(label)[0]}
            />
          </Typography>
        )
        return (
          <Step key={label}>
            <StepLabel
              {...labelProps}
              completed={activeStep == index + 1}
              StepIconComponent={QontoStepIcon}
            />
          </Step>
        )
      })}
    </Stepper>
  )
}
