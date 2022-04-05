import React, { Component } from 'react';

import EntrypointState from '../states/EntrypointState'
import EmailEntryState from '../states/EmailEntryState'
import OnSubmitState from '../states/OnSubmitState'
import EscapeState from '../states/EscapeState';

export default class StatefulPageComponent extends Component {
    affinity;
    email;
    constructor(props) {
        super(props)
        this.page = <EscapeState />;
        this.words = <p></p>;
    }

    componentDidMount() {
        localStorage.setItem('affinity', 'NONE');
        localStorage.setItem('email', '');
        localStorage.setItem('wantsToEscape', false);
        window.addEventListener('selectedAffinity', (e) => {
            console.log("GOT AN AFFINITY!!");
            this.forceUpdate();
            e.preventDefault();
        })
        window.addEventListener('choseToEscape', (e) => {
            console.log("ESCAPING!");
            this.forceUpdate();
            e.preventDefault();
        })
    }

    componentWillUpdate(_nextProps, _nextState) {
        if (!localStorage.getItem('wantsToEscape')) {
            this.page = <EscapeState />;
            return;
        }
        this.affinity = localStorage.getItem('affinity');
        this.email = localStorage.getItem('email');
        console.log("email!: " + this.email);

        switch (this.affinity) {
            case "YELLOW":
                this.words = <p>YOUR MISSION WILL BEGIN ON <br />PLANET ESTALAR</p>
                break;
            case "ORANGE":
                this.words = <p>YOUR MISSION WILL BEGIN ON <br />PLANET LETHERION</p>
                break;
            case "PINK":
                this.words = <p>YOUR MISSION WILL BEGIN ON <br />PLANET DUFAITHAN</p>
                break;
            case "PURPLE":
                this.words = <p>YOUR MISSION WILL BEGIN ON <br />PLANET BLON</p>
                break;
            case "GREEN":
                this.words = <p>YOUR MISSION WILL BEGIN ON <br />PLANET VATANICA</p>
                break;
            default:
                break
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