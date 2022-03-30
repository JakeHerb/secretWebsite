import './App.css'
import skullVideoFile from './media/videos/skullVideo.MP4'

import { useState } from 'react'
import EntrypointState from './states/EntrypointState'
import EmailEntryState from './states/EmailEntryState'

function App() {

  const [pageFlip, setPageFlip] = useState(false)

  const video = (
    <video width="640" height="480" loop autoPlay>
      <source src={skullVideoFile} type="video/MP4"/>
    </video>
  )

  const landingPage = <EntrypointState/>
  const emailForm = <EmailEntryState/>

  var currentPageState = pageFlip === false ? landingPage : emailForm;

  return (
    <div className="App">
      <div className="container">
        <header onClick={() => {setPageFlip(!pageFlip)}} className="App-header">
          <h1>THE AMIABIS</h1>
            {video}
            {currentPageState}
        </header>
      </div>
    </div>
  )
}

export default App
