import React from "react";
import { Typography, Stack } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        const searchResults = document.getElementById("exercise-cards");
        if (searchResults) {
          searchResults.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "55px", height: "55px" }}
      />
      <Typography
        fontWeight="bold"
        sx={{ fontSize: { lg: "40px", xs: "30px" } }}
        mb="50px"
        textTransform={"capitalize"}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
