import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import BodyMap from "../components/BodyMap";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [inputUser, setInputUser] = useState("");

  // console.log(inputUser) //! I have made it!

  return (
    <Box>
      <HeroBanner />
      <BodyMap />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setInputUser={setInputUser} //* This is my addition
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        inputUser={inputUser} //* This is my addition
      />
    </Box>
  );
};

export default Home;
