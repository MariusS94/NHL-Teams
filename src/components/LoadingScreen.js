import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = (probs) => {
  return (
    <div className="loadingScreen">
      <img src={probs.src} alt={probs.alt} />
    </div>
  );
};

export default LoadingScreen;
