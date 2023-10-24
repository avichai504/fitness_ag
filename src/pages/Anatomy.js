import React from "react";
import { Box } from "@mui/material";
import BodyMap from "../components/BodyMap";
import { useNavigate } from "react-router-dom";

const Anatomy = () => {
  const navigate = useNavigate();
  const handleGoBackHome = () => {
    navigate("/");
  };

  return (
    <>
        <button onClick={handleGoBackHome} className="detail-btn">
          Home
        </button>
      <Box id="anatomy" className="container ">
        <div className="gap"></div>
        <BodyMap />
      </Box>
    </>
  );
};
export default Anatomy;
