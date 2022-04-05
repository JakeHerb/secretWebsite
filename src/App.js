import './App.css'
import StatefulPageComponent from './components/StatefulPageComponent'
import trimmedVideoSource from './media/videos/skullVideo_square.mp4'


function App() {

  const video = (
    <video autoPlay loop muted playsInline >
      <source src={trimmedVideoSource} type="video/mp4"/>
    </video>
  )

  // <source src='https://videosformattswebsite.s3.us-west-2.amazonaws.com/skullVideo.MP4' type="video/MP4"/>

 const page = <StatefulPageComponent />

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>THE AMY ABYSS</h1>
            {video}
            {page}
        </header>
      </div>
    </div>
  )
}

export default App
