import { DotLoader, RingLoader } from "react-spinners";
import "./userform.css";

const LoadingIndicator = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        flexWrap: "wrap",
      }}
      className="loader"
    >
      <DotLoader className="dotloader" color={"#fff"} size={100} loading />
      <h1>Calculating...</h1>
    </div>
  );
};

export default LoadingIndicator;
