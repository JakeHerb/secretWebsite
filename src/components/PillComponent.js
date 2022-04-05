import React, { Component } from 'react';
export default class PillComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onSelectAffinity = this.onSelectAffinity.bind(this);
    }
    // Form Events
    onSelectAffinity() {
        localStorage.setItem('affinity', this.props.color);
        console.log("Selecting affinity: " + this.props.color);
        window.dispatchEvent(new Event('selectedAffinity'));
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