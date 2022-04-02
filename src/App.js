import './App.css'
import skullVideoFile from './media/videos/skullVideo.MP4'

import StatefulPageComponent from './components/StatefulPageComponent'


function App() {

  const video = (
    <video width="640" height="480" loop autoPlay muted>
      <source src={skullVideoFile} type="video/MP4"/>
    </video>
  )

  
 const page = <StatefulPageComponent />

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>THE AMIABIS</h1>
            {video}
            {page}
        </header>
      </div>
    </div>
  )
}

export default App
