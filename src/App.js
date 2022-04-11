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
  const [hasChosenPill, setHasChosenPill] = useState(false)
  const [count, setCount] = useState(0)

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

  const missionStatement = (pillColor) => {
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
          return (
            <div className="State-Entrypoint">
            <h3>CHOOSE WISELY</h3>
            <div className='PillSelection'>
              <div className='YellowGummy'>
              <PillComponent 
                imageSource={yellowGummy}
                color="YELLOW"
                >
              </PillComponent>
              </div>
              <div className='OrangeGummy'>
                <PillComponent 
                  imageSource={orangeGummy}
                  color="ORANGE"
                  >
                </PillComponent>
              </div>
              <div className='PinkGummy'>
              <PillComponent 
                imageSource={pinkGummy}
                color="PINK"
                >
              </PillComponent>
              </div>
              <div className='PurpleGummy'>
              <PillComponent 
                imageSource={purpleGummy}
                color="PURPLE"
                >
              </PillComponent>
              </div>
              <div className='GreenGummy'>
                <PillComponent 
                  imageSource={greenGummy}
                  color="GREEN"
                  >
                </PillComponent>
              </div>
            </div>
          </div>
          )
    }
  }

  const pillSelectionBody = missionStatement(localStorage.getItem('affinity'))

  useEffect(() => {
    if (hasChosenPill) {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000)
    }
  }, [hasChosenPill])

  useEffect(() => {
    if (count > 10) {

    }
  })

  const contactEntryBody = (
    <div className="State-EmailEntry">
      <p>ENTER YOUR EMAIL FOR A <br/>
          CHANCE TO MAKE THE LIST
      </p>
      <InputTransformComponent/>
    </div> 
  )

  return (
    <ChakraProvider>
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>THE AMY ABYSS</h1>
            {video}
            {hasClickedEscape === false ? escapeBody : null}
            {pillSelectionBody}
            {contactEntryBody}
        </header>
      </div>
    </div>
    </ChakraProvider>
  )
}

export default App
