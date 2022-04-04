import '../App.css'

function EscapeState() {
    
    const onClick = () => {
        console.log("CLICK!");
        localStorage.setItem('wantsToEscape', true);
        window.dispatchEvent(new Event('choseToEscape'));
    }

  return (
    <div className="State-Escape">
        <h3>DO YOU WANT TO ESCAPE?</h3>
        <div onClick={onClick} className='EscapeSelection'>
            <p style={{
                color: "red",
                cursor: "pointer",
                fontSize: "2.0em",
            }}>
                YES / NO
            </p>
            </div>
    </div>
  )
}

export default EscapeState
