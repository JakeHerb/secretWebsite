import React, { Component } from 'react';
export default class PillComponent extends Component {
    userData;
    missionStatement;
    constructor(props) {
        super(props);
        this.missionStatement = null;
        this.onSelectAffinity = this.onSelectAffinity.bind(this);
        this.state = {
            missionStatement: null
        }
    }
    // Form Events
    onSelectAffinity() {
        localStorage.setItem('affinity', this.props.color);
        console.log("Selecting affinity: " + this.props.color);
    }

    // React Life Cycle
    componentDidMount() {}

    render() {
        console.log("rendering")
       return (
            <img
                onClick={this.onSelectAffinity}
                src={this.props.imageSource}
                alt="A choice." />
        )
    }
}