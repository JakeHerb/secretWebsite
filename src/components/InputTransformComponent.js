import React, { Component } from 'react';
import { API } from 'aws-amplify'
import { createContact } from '../graphql/mutations'

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

    async onSubmit(e) {
        e.preventDefault()
        console.log("Submit! Email: " + this.state.email);
        const email = this.state.email
        const affinity = "Jake"
        this.setState({
            email: e.target.value,
            submitted: true
        })
        if (this.state.email !== '') {
            try {
              await API.graphql({
                  query: createContact,
                  variables: {
                      input: {
                        email, affinity
                      }
                  }
              })
            } catch (e) {
                console.log("Error: Signals blurred")
                console.log(e)
            }
          }
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
        const form = (
            <>
            <p>ENTER YOUR EMAIL FOR A <br/>
            CHANCE TO MAKE THE LIST
            </p>
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
                    </div>
                </form>
            </div>
            </>
        )

        const submittedPage = (
              <div className="State-onsubmit">
                <div>
                  <p>YOU ARE # 362
                  <br />WE WILL BE IN CONTACT
                  <br />IF YOU MADE THE LIST
                  <br />NOT EVERYONE IS WORTHY
                  </p>
                </div>
            </div>
        )

        return (
            this.state.submitted === false ?
                form :
                submittedPage
        )
    } // End if
}
