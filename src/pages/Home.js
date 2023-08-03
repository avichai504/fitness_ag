import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [inputUser, setInputUser] = useState("");
  
  // console.log(inputUser) //! I have made it!
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setInputUser={setInputUser}  //* This is my addition
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        inputUser={inputUser}  //* This is my addition
        />
    </Box>
  );
};

export default Home;



//? This is how we can comment questions
//! This is how we can comment warnings
//* This is how we can comment important notes
// This is normal

