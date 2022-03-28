import { useState } from 'react'
// import logo from './logo.svg'
import skull from './media/images/skull.png'
import './App.css'

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

  return (
    <div className="App">
      <header className="App-header">
      <p>Unwrap & Steal</p>
        <img src={skull} className="App-logo" alt="logo" />
        {hasClicked === false ? formComponent : null}
        {hasClicked === true ? buttonAfter : null}
      </header>
    </div>
  )
}

export default App
