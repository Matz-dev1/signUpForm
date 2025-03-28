import { useState } from "react";
import iconList from '../images/icon-list.svg'
import ButtonSubmit from './ButtonSubmit';


function SignedIn ({buttonText}) {
  const [isVisible, setIsVisible] = useState(true);
  const email = localStorage.getItem("email");
  const toggleDisplay = () => {
    setIsVisible(false); 
  };

  if (!isVisible) {
    return null;
  } else {
  return (
    <div style={{width: "28%", marginLeft: '36%', display: 'flex', justifyContent: 'center'}}>
       <div className="background" style={{backgroundColor: 'white', display: 'flex',flexDirection: 'column', width: "100%", minWidth: '350px', boxSizing: "border-box", marginTop: '30%', borderRadius: '5%', paddingTop: '6vh', paddingLeft:'8vh', paddingRight: '8vh', paddingBottom: '6vh', }}>
        <img src={iconList} alt='icon check' style={{width: '7vh', height: '7vh'}}/>
        <h2 style={{fontSize: '2.8em', margin: '1vh'}}>Thanks for subscribing!</h2>
        <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscribtion.</p>
      <ButtonSubmit buttonText={buttonText} onClick={toggleDisplay}/>
      </div>
    </div>
  )
}
}
export default SignedIn