import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";

import { exercisesOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart, inputUser }) => {


  useEffect ( () => {

    const fetchExerciseData = async () => {
      let exerciseData = [];

      if(bodyPart === 'all') {
        exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exercisesOptions)
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList/bodyPart=${bodyPart}`, exercisesOptions)
      }
      setExercises(exerciseData)
    }

    fetchExerciseData()
    
  }, [bodyPart] )


  return ( 

    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        {inputUser
          ? exercises.length
            ? `Showing ${exercises.length} exercises for ${inputUser}`
            : `No exercises found for ${inputUser}`
          : "Search for something!"}
      </Typography>

   
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack
      mt="100px" alignItems="center" >
      </Stack>
    </Box>
  );
};

export default Exercises;
