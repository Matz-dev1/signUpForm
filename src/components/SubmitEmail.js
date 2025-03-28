import { useState } from "react";
import ButtonSubmit from './ButtonSubmit';

function SubmitEmail ({action, buttonText}) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateEmail = (email) => {
      return /^\S+@\S+\.\S+$/.test(email); // Sprawdza czy e-mail ma poprawny format
    };
    
    if (!email) {
      setErrorMessage("Please enter an email");
      setEmail("")
    } else if (!validateEmail(email)) {
      setErrorMessage("Valid email required");
      setEmail("")
    }else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <form noValidate action={action} onSubmit={handleSubmit}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <label htmlFor="email" style={{fontSize:'0.8em', fontWeight: 'bold'}}>Email Address</label>
        <span style={{ color: "red", fontSize: "0.8em", fontWeight: 'bold', textAlign: 'right' }}>{errorMessage}</span>
        </div>
        <input id="email" placeholder="email@company.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  style={{display: 'block',marginTop: '1.5%', width: '100%', height: '3em', borderRadius: '1vh',  outline: "none", boxSizing: 'border-box', border: errorMessage ? "2px solid red" : "1px solid #ccc", backgroundColor: errorMessage ? "#f5d6a4" : "white"}}/>
        <ButtonSubmit buttonText={buttonText}/>
      </form>
    </div>
  )
}
export default SubmitEmail