import React from 'react'
import StepConnector from '@material-ui/core/StepConnector'
import { makeStyles, withStyles } from '@material-ui/core/styles'

export const QontoConnector = withStyles({
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

export const useQontoStepIconStyles = makeStyles({
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
    },
    alternativeLabel: {
        backgroundColor: 'transparent',
        color: 'white',
        padding: '24px 0px 0px'
    },
    body1: {
        fontSize: '12px',
        textAlign: 'center',
        marginTop: -10,
        opacity: 0.5
    }
})