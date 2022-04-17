import React, { Component } from 'react';
import { API } from 'aws-amplify'
import { createContact } from '../graphql/mutations'
import * as queries from '../graphql/queries'

export default class InputTransformComponent extends Component {
    constructor(props) {
        super(props);
        this.planet = this.props.planet;
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: '', 
            submitted: false
        }
    }
    
  usePlanet(pillColor) {
    switch (pillColor) {
      case "YELLOW":
        return "ESTALAR"
      case "ORANGE":
        return "LETHERION"
      case "PINK":
        return "DUFAITHAN"
      case "PURPLE":
        return "BLON"
      case "GREEN":
        return "VATANICA"
      default:
        return "EARTH"
    }
  }

    // Form Events
    onChange(e) {
        this.setState({
            email: e.target.value,
            submitted: false
        });
    }

    async onSubmit(e) {
        e.preventDefault()
        console.log("WHAT HAVE YOU DONE " + this.state.email);
        const email = this.state.email
        const storedColor = localStorage.getItem('affinity')
        const affinity = this.usePlanet(storedColor)
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
              const allUsers = await API.graphql({
                query: queries.listContacts,
                authMode: 'AWS_IAM'
              });
            console.log("About to log contacts!");
            console.log(allUsers);
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
                  <p>YOU ARE IN WAVE ONE
                  <br />WE WILL BE IN CONTACT
                  <br />IF YOU MADE THE LIST
                  <br />NOT EVERYONE IS WORTHY
                  </p>
                </div>
                {this.props.planet}
            </div>
        )

        return (
            this.state.submitted === false ?
                form :
                submittedPage
        )
    } // End if
}
