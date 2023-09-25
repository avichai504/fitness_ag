import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart, inputUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(60);

  const searchResults = (inputUser, bodyPart) => {
    const boldStyle = { fontWeight: "bold", fontSize:"60px" };
    return inputUser || bodyPart !== "all" ? (
      <Typography
        fontWeight={500}
        color={"white"}
        sx={{ fontSize: { lg: "54px", xs: "30px" } }}
        mb="20px"
        textAlign="center"
      >
        Showing <span style={boldStyle}>{exercises.length}</span> Exercises for{" "}
        <span style={boldStyle}>{bodyPart || inputUser }</span> 💪🏼
      </Typography>
    ) : (
      ""
    );
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        //! Optional - render all the body parts as the app start 
        // exercisesData = await fetchData(
        //   "https://exercisedb.p.rapidapi.com/exercises",
        //   exerciseOptions
        // );

      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);  //? adding more dependency - `setExercise`



  //! Optional - Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1780, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        {searchResults(inputUser, bodyPart)}
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      
    </Box>
  );
};

export default Exercises;
