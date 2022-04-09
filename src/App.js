import './App.css'
import StatefulPageComponent from './components/StatefulPageComponent'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { ChakraProvider } from '@chakra-ui/react'
import { ContactFormModal } from './components/ContactFormModal'

Amplify.configure(config)
function App() {

  const video = (
    <video autoPlay loop muted playsInline >
      <source src='https://videosformattswebsite.s3.us-west-2.amazonaws.com/skullVideo_square.mp4' type="video/mp4"/>
    </video>
  )

 const page = <StatefulPageComponent />

  return (
    <ChakraProvider>
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>THE AMY ABYSS</h1>
            {video}
            {page}
            <ContactFormModal />
        </header>
      </div>
    </div>
    </ChakraProvider>
  )
}

export default App
