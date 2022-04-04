import React, { Component } from 'react';

import EntrypointState from '../states/EntrypointState'
import EmailEntryState from '../states/EmailEntryState'
import OnSubmitState from '../states/OnSubmitState'

export default class StatefulPageComponent extends Component {

    constructor(props) {
        super(props)
        this.onClickButton = this.onClickButton.bind(this);
        this.page = <EntrypointState />;
        this.state = {
            affinity: 'NONE',
            clicks: 0
        }
    }

    componentDidMount() {
        this.setState(state => {
            return({
                clicks: 0
            })
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.clicks === 0) {
            this.page = <EntrypointState />;
        }
        if (nextState.clicks === 10) {
            this.page = <EmailEntryState />;
        }
        if (nextState.clicks === 30) {
            this.page = <OnSubmitState />;
        }
    }

    onClickButton = () => {
        this.setState(state => {
            console.log("state: " + state.clicks);
            return ({
                clicks: state.clicks + 1
            })
        })
    }

    render() {

        
        return (
            <div className="page">
                {this.page}
            </div>
        )
    }
}