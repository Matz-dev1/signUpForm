import "./SignUpPage.css";
import signUpImg from "../images/illustration-sign-up-desktop.svg";
import iconList from "../images/icon-list.svg";
import SubmitEmail from "./SubmitEmail";

function SignUpPage({ buttonText }) {
  return (
    <div className="signUpCard">
      <div className="background">
        <div className="leftHalf">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="checkList">
            <p>
              <img src={iconList} alt="check icon" />
              Product discovery and building what matters
            </p>
            <p>
              <img src={iconList} alt="check icon" />
              Measuring to ensure updates are a success
            </p>
            <p>
              <img src={iconList} alt="check icon" />
              And much more!
            </p>
          </div>
          <div className="submitContainer">
            <SubmitEmail buttonText={buttonText} />
          </div>
        </div>
        <div className="rightHalf">
          <img src={signUpImg} alt="sign up illustration" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
