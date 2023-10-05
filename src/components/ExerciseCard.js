import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "19px", xs: "16px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
  </Link>
);

export default ExerciseCard;
