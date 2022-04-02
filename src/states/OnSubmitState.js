import '../App.css'

function OnSubmitState() {

  const placeInLine = 362;
  
  const placeInLineBodyText = (
    <p>YOU ARE # {placeInLine}
    <br />WE WILL BE IN CONTACT
    <br />IF YOU MADE THE LIST
    <br />NOT EVERYONE IS WORTHY
    </p>
    )

  return (
    <div className="State-onsubmit">
        <div>
            {placeInLineBodyText}
        </div>
    </div>
  )
}

export default OnSubmitState
