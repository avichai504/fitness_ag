import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";
import "../App.css";

const ExerciseCard = ({ exercise, isLeftmost }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="exercise-container">
      <Link
        id="exercise-cards"
        className="exercise-card"
        to={`/exercise/${exercise.id}`}
      >
        {isHovered && (
          <div className="instructions">{exercise.instructions}</div>
        )}
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <Stack direction="row">
          <Button
            sx={{
              ml: "19px",
              color: "#000",
              backgroundColor: "#ff22225c",
              fontSize: "19px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "19px",
              color: "#000",
              backgroundColor: "#e4ff007a",
              fontSize: "20px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
          <Button
            sx={{
              ml: "19px",
              color: "#000",
              backgroundColor: "#2300cc59",
              fontSize: "20px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.equipment}
          </Button>
        </Stack>
        <Typography
          sx={{
            color: "#000",
            fontSize: "22px",
            fontWeight: "bold",
            mt: "25px",
          }}
        >
          {exercise.name}
        </Typography>
      </Link>
    </div>
  );
};

export default ExerciseCard;
