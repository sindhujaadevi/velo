import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'

export const useStyles = makeStyles({
    icon: {
        fill: '#00fffc'
    },
    inputLabel: {
        color: 'white',
        fontSize: '12px'
    },
    input: {
        color: 'white',
        fontSize: '16px'
    }
})

export const ThemeRadio = withStyles({
    root: {
        color: '#00ddf4',
        '&$checked': {
            color: '#00ddf4'
        }
    }
})(props => <Radio color='default' {...props} />)