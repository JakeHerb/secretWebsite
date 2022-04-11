import './App.css'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { ChakraProvider, ControlBox, setScript, useShortcut } from '@chakra-ui/react'
import { ContactFormModal } from './components/ContactFormModal'
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
  const [hasClickedSure, setHasClickedSure] = useState(false)
  const [hasChosenPill, setHasChosenPill] = useState(false)
  const [count, setCount] = useState(0)
  const [planet, setPlanet] = useState("")

  const video = (
    <video autoPlay loop muted playsInline >
      <source src='https://videosformattswebsite.s3.us-west-2.amazonaws.com/skullVideo_square.mp4' type="video/mp4"/>
    </video>
  )

  const escapeBody = (
    <div className="State-Escape">
          <h3>DO YOU WANT TO ESCAPE?</h3>
          <div onClick={() => {
            console.log("CLICK!");
            setHasClickedEscape(true)
              }} 
            className='EscapeSelection'>
              <p style={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: "2.0em",
              }}>
                  YES / NO
              </p>
              </div>
      </div>
  )

  const areYouSureBody = (
    <div className="State-Sure">
    <h3>THERE ARE RISKS INVOLVED. ARE YOU SURE YOU WANT TO CONTINUE?</h3>
    <div onClick={() => {
      console.log("CLICK!");
      setHasClickedSure(true)
        }} 
      className='SureSelection'>
        <p style={{
            color: "red",
            cursor: "pointer",
            fontSize: "2.0em",
        }}>
            YES / NO
        </p>
        </div>
</div>
  )

  const useFindPlanet = (pillColor) => {
    switch (pillColor) {
      case "YELLOW":
        return <p>YOUR MISSION WILL BEGIN ON <br />PLANET ESTALAR</p>
      case "ORANGE":
        return <p>YOUR MISSION WILL BEGIN ON <br />PLANET LETHERION</p>
      case "PINK":
        return  <p>YOUR MISSION WILL BEGIN ON <br />PLANET DUFAITHAN</p>
      case "PURPLE":
        return <p>YOUR MISSION WILL BEGIN ON <br />PLANET BLON</p>
      case "GREEN":
        return  <p>YOUR MISSION WILL BEGIN ON <br />PLANET VATANICA</p>
      default:
        return <p>No mission.</p>
    }
  }


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
    if (hasChosenPill) {
      console.log("Chose it")
      setTimeout(() => {
        if (count < 6) {
          setCount((count) => count + 1);
          console.log(count)
        }
      }, 1000)

    console.log("IMPORTANT")
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
    
    } else {
      console.log("No choice")
    }
  }, [count, hasChosenPill])

  useEffect(() => {
    if(hasClickedEscape) {
      console.log("Escaped")
    } else {
      console.log("No Escape")
    }
  }, [hasClickedEscape])


  const contactEntryBody = (
    <div className="State-EmailEntry">
      <InputTransformComponent/>
    </div> 
  )

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>THE AMIABIS</h1>
            {video}
            {hasClickedEscape === false ? escapeBody : null}
            {(hasClickedEscape === true && hasChosenPill === false) ? pillSelectionBody : null}
            {(hasChosenPill === true && hasClickedSure === false) ? areYouSureBody : null}
            {(hasChosenPill === true && hasClickedSure === true) ? planet : null}
            {count > 5 ? contactEntryBody : null}
        </header>
      </div>
    </div>
  )
}

export default App
