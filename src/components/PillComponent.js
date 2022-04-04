import React, { Component } from 'react';
export default class PillComponent extends Component {
    userData;
    textColor;
    constructor(props) {
        super(props);
        this.onSelectAffinity = this.onSelectAffinity.bind(this);
        this.state = {
            affinity: '',
        }
    }
    // Form Events
    onSelectAffinity(e) {
        this.setState({ affinity: e.target.value })
    }
    // React Life Cycle
    componentDidMount() {
        if (this.props.text === 'RED PILL') {
            this.textColor = 'red'
        } else if (this.props.text === 'BLUE PILL') {
            this.textColor = 'blue';
        }

        this.userData = JSON.parse(localStorage.getItem('affinity'));
        if (localStorage.getItem('affinity')) {
            this.setState({
                affinity: ''
            })
        } else {
            this.setState({
                affinity: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('affinity', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="pill">
                    <img 
                        height="100px" 
                        width="100px" 
                        src={this.props.imageSource} 
                        alt="A choice." />
            </div>
        )
    }
}