import '../App.css'
import PillComponent from '../components/PillComponent'
import redEcstacyPill from '../media/images/ecstacy_pill_red.jpg'
import blueEcstacyPill from '../media/images/ecstacy_pill_blue.jpg'

function EntrypointState() {

  const redPill = (
  <PillComponent 
    imageSource={redEcstacyPill}
    text="RED PILL"
    >
  </PillComponent>)
  
  const bluePill = (
    <PillComponent 
      imageSource={blueEcstacyPill}
      text="BLUE PILL"
      >
    </PillComponent>)

  return (
    <div className="State-Entrypoint">
        <h3>CHOOSE WISELY</h3>
        <div className='PillSelection'>
          <div className='RedPill'>
            {redPill}
          </div>
          <div className='BluePill'>
            {bluePill}
          </div>
        </div>
    </div>
  )
}

export default EntrypointState
