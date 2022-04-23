import './App.css'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import PillComponent from './components/PillComponent'
import pinkGummy from './media/images/pink_gummy.png'
import greenGummy from './media/images/green_gummy.png'
import orangeGummy from './media/images/orange_gummy.png'
import purpleGummy from './media/images/purple_gummy.png'
import yellowGummy from './media/images/yellow_gummy.png'
import InputTransformComponent from './components/InputTransformComponent'
import React, { useEffect, useState } from 'react'

Amplify.configure(config)
function App() {

  const [hasClickedEscape, setHasClickedEscape] = useState(false)
  const [isStuck, setIsStuck] = useState(false)
  const [cannotHandleRisk, setCannotHandleRisk] = useState(false)
  const [hasClickedSure, setHasClickedSure] = useState(false)
  const [hasChosenPill, setHasChosenPill] = useState(false)
  const [planet, setPlanet] = useState("")

  const video = (
    <video autoPlay loop muted playsInline >
      <source src='https://videosformattswebsite.s3.us-west-2.amazonaws.com/skullVideo_square.mp4' type="video/mp4"/>
    </video>
  )

  const yesEscape = <p 
    style={{
      color: "red",
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
      color: "red",
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
      color: "red",
      fontSize: "3vh",
      fontWeight: "bold"}}
    >COME BACK WHEN<br />YOU'RE READY</p>;

  const yesSure = <p 
  style={{
    color: "red",
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
    color: "red",
    cursor: "pointer",
    paddingLeft: "2vw"}}
  onClick={() => 
    {
      setCannotHandleRisk(true);
    }}
>NO</p>

  const areYouSureBody = (
    <div className="State-Sure">
      <h3>THERE ARE RISKS INVOLVED.<br />DO YOU WANT TO CONTINUE?</h3>
      <div
        className='EscapeSelection'
      >
        {yesSure}{slash}{noSure}
      </div>
</div>
  )

const notSuretext = <p
  style={{
    color: "red",
    fontSize: "3.2vh",
    fontWeight: "bold"}}
  >THAT IS WHY NO ONE WILL<br />REMEMBER YOUR NAME</p>;

  const pillSelectionBody = (
    <div className="State-Entrypoint">
      <h3>CHOOSE WISELY</h3>
      <div className='PillSelection'>
        <div className='YellowGummy'>
          <PillComponent 
            imageSource={yellowGummy}
            color="YELLOW"
            onClick={() => setHasChosenPill(true)}
            >
          </PillComponent>
        </div>
        <div className='OrangeGummy'>
          <PillComponent 
            imageSource={orangeGummy}
            color="ORANGE"
            onClick={() => setHasChosenPill(true)}
            >
          </PillComponent>
        </div>
        <div className='PinkGummy'>
          <PillComponent 
            imageSource={pinkGummy}
            color="PINK"
            onClick={() => setHasChosenPill(true)}
            >
          </PillComponent>
        </div>
        <div className='PurpleGummy'>
          <PillComponent 
            imageSource={purpleGummy}
            color="PURPLE"
            onClick={() => setHasChosenPill(true)}
            >
          </PillComponent>
        </div>
        <div className='GreenGummy'>
          <PillComponent 
            imageSource={greenGummy}
            color="GREEN"
            onClick={() => setHasChosenPill(true)}
            >
          </PillComponent>
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    console.log("HAVE YOU MADE THE RIGHT CHOICE?")
    const affinity = localStorage.getItem('affinity')
    switch (affinity) {
      case "YELLOW":
        setPlanet(<p>YOUR MISSION WILL BEGIN ON <br />PLANET ESTALAR</p>)
        break
      case "ORANGE":
        setPlanet(<p>YOUR MISSION WILL BEGIN ON <br />PLANET LETHERION</p>)
        break
      case "PINK":
        setPlanet(<p>YOUR MISSION WILL BEGIN ON <br />PLANET DUFAITHAN</p>)
        break
      case "PURPLE":
        setPlanet(<p>YOUR MISSION WILL BEGIN ON <br />PLANET BLON</p>)
        break
      case "GREEN":
        setPlanet(<p>YOUR MISSION WILL BEGIN ON <br />PLANET VATANICA</p>)
        break
      default:
        setPlanet( <p>No mission.</p>)
    }
  
  }, [hasClickedSure, hasChosenPill])

  useEffect(() => {
    if(hasClickedEscape) {
      console.log("WHY FIGHT")
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
        <h1 className='Header-text'>THE AMIABIS</h1>
          {video}
      </header>
      <div className='dynamic-content'>
        {(isStuck === true) ? comeBacktext : null}
        {(hasClickedEscape === false && isStuck === false) ? escapeBody : null}
        {(hasClickedEscape === true && hasChosenPill === false) ? pillSelectionBody : null}
        {(hasChosenPill === true && hasClickedSure === false && cannotHandleRisk === false) ? areYouSureBody : null}
        {(cannotHandleRisk === true) ? notSuretext : null}
        {(hasChosenPill === true && hasClickedSure === true) ? contactEntryBody : null}
        
      </div>
    </div>
  )
}

export default App
