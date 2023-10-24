import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import HeroSection from "../components/HeroSection";
import BodyMap from "../components/BodyMap";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box id="home">
      <HeroSection />
      <div className="container">
        <HeroBanner />
        <BodyMap />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </div>
    </Box>
  );
};

export default Home;
