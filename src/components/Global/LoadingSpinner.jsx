import React from "react";
import spinner from "../../assets/loadingSpinner.svg";

function LoadingSpinner({ loading }) {
  if (!loading) return null;
  return (
    <img
      className="loading-spinner"
      style={{
        width: "1.5em",
        height: "1.5em",
        margin: "0 0.5em",
        verticalAlign: "middle",
      }}
      src={spinner}
      alt="Loading..."
    />
  );
}

export default LoadingSpinner;
