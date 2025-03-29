import signUpImg from "../images/illustration-sign-up-desktop.svg";
import iconList from "../images/icon-list.svg";
import SubmitEmail from "./SubmitEmail";

function SignUpPage({ action, buttonText }) {
  return (
    <div
      className="signUpCard"
      style={{
        width: "60%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="background"
        style={{
          backgroundColor: "white",
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          marginTop: "10%",
          marginBottom: "10%",
          borderRadius: "5%",
          paddingTop: "3vh",
          paddingLeft: "3vh",
          paddingRight: "3vh",
          paddingBottom: "2.4vh",
          gap: "1%",
        }}
      >
        <div
          className="leftHalf"
          style={{ width: "47%", paddingLeft: "6%", paddingRight: "6%" }}
        >
          <h2 style={{ fontSize: "3em" }}>Stay updated!</h2>
          <div>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div style={{}}>
              <p>
                <span>
                  <img
                    src={iconList}
                    alt="check icon"
                    style={{ paddingRight: "3%", verticalAlign: "middle" }}
                  />
                </span>
                Product discovery and building what matters
              </p>
              <p>
                <span>
                  <img
                    src={iconList}
                    alt="check icon"
                    style={{ paddingRight: "3%", verticalAlign: "middle" }}
                  />
                </span>
                Measuring to ensure updates are a success
              </p>
              <p>
                <span>
                  <img
                    src={iconList}
                    alt="check icon"
                    style={{ paddingRight: "3%", verticalAlign: "middle" }}
                  />
                </span>
                And much more!
              </p>
            </div>
          </div>
          <div style={{ marginTop: "20%" }}>
            <SubmitEmail action={action} buttonText={buttonText} />
          </div>
        </div>
        <div className="rightHalf" style={{ width: "50%", textAlign: "end" }}>
          <img
            src={signUpImg}
            alt="sign up illustration"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
