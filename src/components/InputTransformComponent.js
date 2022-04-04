import React, { Component } from 'react';

export default class InputTransformComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            clicked: false,
            email: ''
        }
    }
    // Form Events
    onClick() {
        this.setState({ clicked: !this.state.clicked })
        if (this.state.clicked) {
            console.log("Click!")
        } else {
            console.log("Unclick.")
        }
    }
    onSubmit(e) {
        e.preventDefault()
        console.log("Submit! Email: " + e);
        this.setState({
            clicked: false,
            email: e.target.value
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            if (this.userData.email) {
                this.setState({
                    clicked: false,
                    email: this.userData.email        
                })
            }
            this.setState({
                clicked: this.userData.clicked,
                email: ''
            })
        } else {
            this.setState({
                clicked: false,
                email: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="email-container">
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <input 
                            type="email"   
                            className="form-control" 
                            placeholder='YOUR EMAIL'
                            onSubmit={this.onSubmit} 
                        />
                        <div className="line"></div>
                    </div>
                    <p className="btn btn-primary btn-block" onClick={this.onClick}>[SUBMIT]</p>
                </form>
            </div>
        )
    } // End if
}
