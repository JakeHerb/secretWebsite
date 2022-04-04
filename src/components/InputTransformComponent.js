import React, { Component } from 'react';

export default class InputTransformComponent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: '', 
            submitted: false
        }
    }
    // Form Events
    onChange(e) {
        console.log("CHANGING!: " + e.target.value);
        this.setState({
            email: e.target.value,
            submitted: false
        });
    }
    onSubmit(e) {
        console.log("Submit! Email: " + e.target.value);
        this.setState({
            submitted: true
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('formData'));
        if (localStorage.getItem('formData')) {
            this.setState({
                email: '',
                submitted: false
            })
        } else {
            this.setState({
                email: '',
                submitted: false
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('formData', JSON.stringify(nextState));
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
                            onChange={this.onChange}
                            onSubmit={this.onSubmit} 
                            value={this.state.email}
                        />
                        <div className="line"></div>
                    </div>
                    <p className="btn btn-primary btn-block" onClick={this.onSubmit}>[SUBMIT]</p>
                </form>
            </div>
        )
    } // End if
}
