import { useState } from 'react'
// import logo from './logo.svg'
import skull from './media/images/skull.png'
import './App.css'
import FormDataComponent from './components/FormDataComponent'
import PillComponent from './components/PillComponent'
import redEcstacyPill from './media/images/ecstacy_pill_red.jpg'
import blueEcstacyPill from './media/images/ecstacy_pill_blue.jpg'

import skullVideoFile from './media/videos/skullVideo.MP4'

function App() {
  const [count, setCount] = useState(0)

  var [hasClicked, setHasClicked] = useState(false)

  const buttonBefore = (
    <button className="Button-before" 
    // type="submit" 
    onClick={() => {
      console.log(hasClicked)
      setHasClicked(true)}
    }
  >
      What are you willing to lose?
    </button>
  );

  const buttonAfter = (
    <button className="Button-after" 
      // type="submit" 
      onClick={() => {
        console.log(hasClicked)
        setHasClicked(false)
      }}
    >
      Too late now.
    </button>
  );
  
  const formText = "Keep in contact"
  const formComponent = (
    <form>
      <label>
        {formText}
        <br></br>
        <input className="InputSpace" type="text" name="name" />
        <br></br>
      </label>
      <br></br>
      <div className="button__wrap">
          {hasClicked === false ? buttonBefore : null}
          {hasClicked === true ? buttonAfter : null}
          <div className="button__shadow"></div>
      </div>
    </form>
);
  const redPill = (
  <PillComponent 
    imageSource={redEcstacyPill}
    text="RED PILL"
    >
  </PillComponent>);
  
  const bluePill = (
    <PillComponent 
      imageSource={blueEcstacyPill}
      text="BLUE PILL"
      >
    </PillComponent>)

  const video = (
    <video width="640" height="480" loop>
      <source src={skullVideoFile} type="video/MP4"/>
    </video>
  );

  return (
    <div className="App">
      <header className="App-header">
      <h1>THE AMIABIS</h1>
        {video}
        <h3>CHOOSE WISELY</h3>
        <div className='PillSelection'>
          <div className='RedPill'>
            {redPill}
          </div>
          <div className='BluePill'>
            {bluePill}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
