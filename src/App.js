import './App.css'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import logo from './media/images/unwrap_and_steal_logo.png'
import InputTransformComponent from './components/InputTransformComponent'
import React, { useEffect, useState } from 'react'

Amplify.configure(config)
function App() {

  const [hasClickedEscape, setHasClickedEscape] = useState(false)
  const [isStuck, setIsStuck] = useState(false)
  const [cannotHandleRisk, setCannotHandleRisk] = useState(false)
  const [hasClickedSure, setHasClickedSure] = useState(false)
  const [planet, setPlanet] = useState("")

  const video = (
    <video autoPlay loop muted playsInline >
      <source src='https://videosformattswebsite.s3.us-west-2.amazonaws.com/skullVideo_square.mp4' type="video/mp4"/>
    </video>
  )

  const yesEscape = <p 
    style={{
      color: "#ff00a8",
      cursor: "pointer",
      paddingRight: "2vw"}}
    onClick={() => 
      {
        setHasClickedEscape(true)
      }}
  >YES</p>

  const slash = <p> / </p>
  const noEscape = <p 
    style={{
      color: "#ff00a8",
      cursor: "pointer",
      paddingLeft: "2vw"}}
    onClick={() => 
      {
        setIsStuck(true);
        console.log("CLick")
      }}
  >NO</p>

  const escapeBody = (
    <div className="State-Escape">
      <h3>DO YOU WANT TO ESCAPE?</h3>
      <div
        className='EscapeSelection'
      >
      {yesEscape}{slash}{noEscape}
      </div>
    </div>
  )

  const comeBacktext = <p
    style={{
      color: "#ff00a8",
      fontSize: "3vh",
      fontWeight: "bold"}}
    >COME BACK WHEN<br />YOU'RE READY</p>;

  const yesSure = <p 
  style={{
    color: "#ff00a8",
    cursor: "pointer",
    paddingRight: "2vw"}}
  onClick={() => 
    {
    console.log("THERE IS NO ESCAPE");
    setHasClickedSure(true)
    }}
>YES</p>

const noSure = <p 
  style={{
    color: "#ff00a8",
    cursor: "pointer",
    paddingLeft: "2vw"}}
  onClick={() => 
    {
      setCannotHandleRisk(true);
      setHasClickedSure(false);
    }}
>NO</p>

  const areYouSureBody = (
    <div className="State-Sure">
      <h3>THIS IS A REAL LIFE ART HEIST.<br />DO YOU WANT TO CONTINUE?</h3>
      <div
        className='EscapeSelection'
      >
        {yesSure}{slash}{noSure}
      </div>
</div>
  )

const notSuretext = <p
  style={{
    color: "#ff00a8",
    fontSize: "3.2vh",
    fontWeight: "bold"}}
  >THAT IS WHY NO ONE WILL<br />REMEMBER YOUR NAME</p>;

  useEffect(() => {
    if(hasClickedEscape) {
      console.log("WHY FIGHT?")
    } else {
      console.log("WHY STRUGGLE")
    }
  }, [hasClickedEscape])


  const contactEntryBody = (
    <div className="State-EmailEntry">
      <InputTransformComponent planetText={planet}/>
    </div> 
  )
  // isStuck === false && cannotHandleRisk === false

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          <img src={logo} ></img>
        </div>
        {/* <h1 className='Header-text'>THE AMIABIS</h1> */}
          {video}
      </header>
      <div className='dynamic-content'>
        {(isStuck === true) ? comeBacktext : null}
        {(hasClickedEscape === false && isStuck === false) ? escapeBody : null}
        {(hasClickedEscape === true && hasClickedSure === false && cannotHandleRisk === false) ? areYouSureBody : null}
        {(cannotHandleRisk === true && hasClickedSure === false) ? notSuretext : null}
        {(hasClickedSure === true && cannotHandleRisk === false) ? contactEntryBody : null}
        
      </div>
    </div>
  )
}

export default App
