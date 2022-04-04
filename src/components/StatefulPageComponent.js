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
        this.words = <p></p>;
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

    componentWillUpdate(_nextProps, _nextState) {
        this.affinity = localStorage.getItem('affinity');
        this.email = localStorage.getItem('email');
        console.log("email!: " + this.email);

        switch (this.affinity) {
            case "YELLOW":
                this.words = <p>YOUR MISSION WILL BEGIN ON PLANET ESTALAR</p>
                break;
            case "ORANGE":
                this.words = <p>YOUR MISSION WILL BEGIN ON PLANET LETHERION</p>
                break;
            case "PINK":
                this.words = <p>YOUR MISSION WILL BEGIN ON PLANET DUFAITHAN</p>
                break;
            case "PURPLE":
                this.words = <p>YOUR MISSION WILL BEGIN ON PLANET BLON</p>
                break;
            case "GREEN":
                this.words = <p>YOUR MISSION WILL BEGIN ON PLANET VATANICA</p>
                break;
            default:
                this.words = <p>No default case handled...</p>
        }

        if (this.affinity === "NONE") {
            console.log("Returning entrypoint cause none");
            this.page = <EntrypointState />;
        } else if (this.email === '') {
            console.log("Returning email cause email is empty");
            this.page = <EmailEntryState />;
        } else {
            console.log("Returning on submit since we're done");
            this.page = <OnSubmitState />;
        }
    }


    render() {        
        return (
            <div className="page">
                {this.page}
                {this.words}
            </div>
        )
    }
}