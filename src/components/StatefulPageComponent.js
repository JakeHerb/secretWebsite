import React, { Component } from 'react';

import EntrypointState from '../states/EntrypointState'
import EmailEntryState from '../states/EmailEntryState'
import OnSubmitState from '../states/OnSubmitState'

export default class StatefulPageComponent extends Component {
    affinity;
    email;
    constructor(props) {
        super(props)
        this.page = <EntrypointState />;
    }

    componentDidMount() {
        localStorage.setItem('affinity', 'NONE');
        localStorage.setItem('email', '');
        window.addEventListener('selectedAffinity', (e) => {
            console.log("Change to storage!");
            this.forceUpdate();
            e.preventDefault();
        })
    }

    componentWillUpdate(nextProps, nextState) {
        this.affinity = localStorage.getItem('affinity');
        this.email = localStorage.getItem('email');
        console.log("email!: " + this.email);

        if (this.affinity === "NONE") {
            console.log("Returning entrypoint cause none");
            this.page = <EntrypointState />;
        } else if (this.email === '') {
            console.log("Returning email cause email is empty");
            this.page = <EmailEntryState />;
        } else {
            console.log("Returning on submit since we're done")
            this.page = <OnSubmitState />;
        }
    }


    render() {        
        return (
            <div className="page">
                {this.page}
            </div>
        )
    }
}