import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/muscle-icon.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            background: "#fff",
            borderBottomLeftRadius: "200px",
            borderBottomRightRadius: "200px",
            border: "solid 2px #a09000",
            width: "170px",
            height: "232px",
            cursor: "pointer",
            gap: "52px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "170px",
            height: "232px",
            cursor: "pointer",
            gap: "52px",
          }
    }
    onClick={() => {
      setBodyPart(item);
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "99px", height: "99px" }} />
    <Typography fontSize="28px" fontWeight="bold" textTransform="capitalize">
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
