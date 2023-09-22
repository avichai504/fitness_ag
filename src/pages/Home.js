import React, { useState } from "react";
import { Box } from "@mui/material";

import Welcome from "../components/Welcome";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import BodyMap from "../components/BodyMap";
import MenuCards from "../components/MenuCards";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [inputUser, setInputUser] = useState("");

  return (
    <Box>
      <Welcome />
      <MenuCards/>
      <BodyMap />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setInputUser={setInputUser} //* sharing data from user search between components
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        inputUser={inputUser} //* sharing data from user search between components
      />
    </Box>
  );
};

export default Home;
