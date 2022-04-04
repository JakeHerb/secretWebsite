import '../App.css'
import PillComponent from '../components/PillComponent'
import pinkGummy from '../media/images/pink_gummy.png'
import greenGummy from '../media/images/green_gummy.png'
import orangeGummy from '../media/images/orange_gummy.png'
import purpleGummy from '../media/images/purple_gummy.png'
import yellowGummy from '../media/images/yellow_gummy.png'

function EntrypointState() {

  const yellowPill = (
  <PillComponent 
    imageSource={yellowGummy}
    text="PINK"
    >
  </PillComponent>)
  
  const orangePill = (
    <PillComponent 
      imageSource={orangeGummy}
      text="BLUE"
      >
    </PillComponent>)

    const pinkPill = (
    <PillComponent 
      imageSource={pinkGummy}
      text="PINK"
      >
    </PillComponent>)

    const purplePill = (
    <PillComponent 
        imageSource={purpleGummy}
        text="BLUE"
        >
    </PillComponent>)
    
    const greenPill = (
    <PillComponent 
        imageSource={greenGummy}
        text="BLUE"
    >
    </PillComponent>)
    


  return (
    <div className="State-Entrypoint">
        <h3>CHOOSE WISELY</h3>
        <div className='PillSelection'>
          <div className='YellowGummy'>
            {yellowPill}
          </div>
          <div className='OrangeGummy'>
            {orangePill}
          </div>
          <div className='PinkGummy'>
            {pinkPill}
          </div>
          <div className='PurpleGummy'>
            {purplePill}
          </div>
          <div className='GreenGummy'>
            {greenPill}
          </div>
        </div>
    </div>
  )
}

export default EntrypointState
