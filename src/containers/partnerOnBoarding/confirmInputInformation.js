import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConfirmInputInformation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><h2> Input page</h2>
                <div>{JSON.stringify(this.props.inputData)}</div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        inputData: state.prefillApplicationData.inputData
    }
}

export default connect(mapStateToProps, null)(ConfirmInputInformation);
