import "./SignedIn.css";
import { useState } from "react";
import iconList from "../images/icon-list.svg";
import ButtonSubmit from "./ButtonSubmit";

function SignedIn({ buttonText }) {
  const [isVisible, setIsVisible] = useState(true);
  const email = localStorage.getItem("email");
  const toggleDisplay = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="signedInContainer">
      <div className="background">
        <img src={iconList} alt="icon check" className="icon" />
        <h2 className="title">Thanks for subscribing!</h2>
        <p className="message">
          A confirmation email has been sent to <b>{email}</b>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <ButtonSubmit buttonText={buttonText} onClick={toggleDisplay} />
      </div>
    </div>
  );
}

export default SignedIn;
