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
        this.props.onClick();
    }

    // React Life Cycle
    componentDidMount() {}

    render() {
       return (
            <img
                onClick={this.onSelectAffinity}
                src={this.props.imageSource}
                alt="A choice." />
        )
    }
}