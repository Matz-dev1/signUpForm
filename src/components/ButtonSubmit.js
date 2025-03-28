function ButtonSubmit({ buttonText, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          marginTop: "5%",
          width: "100%",
          height: "3em",
          borderRadius: "1vh",
          backgroundColor: "#36384e",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
export default ButtonSubmit;
