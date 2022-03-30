import '../App.css'
import InputTransformComponent from '../components/InputTransformComponent'


function EmailEntryState() {

  const emailInputTransform = <InputTransformComponent/>

  return (
    <div className="State-EmailEntry">
        <p>ENTER YOUR EMAIL FOR A <br/>
        CHANCE TO MAKE THE LIST
        </p>
        {emailInputTransform}
    </div>
  )
}

export default EmailEntryState
