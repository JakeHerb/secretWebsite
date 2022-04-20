import React, { Component } from 'react';
import { API } from 'aws-amplify'
import { createContact } from '../graphql/mutations'

export default class InputTransformComponent extends Component {
    constructor(props) {
        super(props);
        this.planet = this.props.planet;
        // this.placeInLine = 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: '', 
            submitted: false,
            placeInLine: 0
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
        const queuePlace = this.state.placeInLine;
        const email = this.state.email
        this.setState({
            email: e.target.value,
            submitted: false,
            placeInLine: queuePlace
        });
    }

    async onSubmit(e) {
        e.preventDefault()
        console.log("WHAT HAVE YOU DONE " + this.state.email);
        const email = this.state.email
        const storedColor = localStorage.getItem('affinity')
        const affinity = this.usePlanet(storedColor)
        const queuePlace = this.state.placeInLine;

        this.setState({
            email: email,
            submitted: true,
            placeInLine: queuePlace
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
        if (localStorage.getItem('formData').email) {
            if (localStorage.getItem('formData').placeInLine) {
                this.setState({
                    email: localStorage.getItem('formData').email,
                    submitted: false,
                    placeInLine: localStorage.getItem('formData').placeInLine
                })
            }
            var startTime = Math.floor(Date.now() / 1000);
            // Value updated by database for queue estimate:
            startTime -= 1650427898;
            // To account for server ping we adjust our start time
            startTime = Math.floor(startTime / 60);
            const queuePlace = startTime;
            this.setState({
                email: '',
                submitted: false,
                placeInLine: queuePlace
            })
        } else {
            var startTime = Math.floor(Date.now() / 1000);
            // Value updated by database for queue estimate:
            startTime -= 1650427898;
            // To account for server ping we adjust our start time
            startTime = Math.floor(startTime / 60);
            const queuePlace = startTime;
            this.setState({
                email: '',
                submitted: false,
                placeInLine: queuePlace
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
                        {this.state.email !== '' ? (<button>[SUBMIT]</button>) : null}
                    </div>
                </form>
            </div>
            </>
        )

        const submittedPage = (
              <div className="State-onsubmit">
                <div>
                  <p>YOU ARE <span style={{color: "red"}}>#{this.state.placeInLine}</span> IN LINE
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
