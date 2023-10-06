import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/muscle-icon.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className={`bodyPart-card ${bodyPart === item ? "active" : ""}`}
    onClick={() => {
      setBodyPart(item);
    }}
  >
    <img src={Icon} alt="dumbbell" className="bodyPart-image" />
    <Typography
      className="bodyPart-text"
      sx={{
        fontSize: { lg: "20px", md: "16px", xs: "13px" },
        fontWeight: "bold",
      }}
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
