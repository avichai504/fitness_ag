import React from "react";
import NotReadyYet from "../components/NotReadyYet";
import { useNavigate } from "react-router-dom";

const Diet = () => {
  const navigator = useNavigate();
  const handleGoBackHome = () => {
    navigator("/");
  };

  return (
    <>
      <button onClick={handleGoBackHome} className="detail-btn">
        Home
      </button>
      <NotReadyYet />
    </>
  );
};

export default Diet;
