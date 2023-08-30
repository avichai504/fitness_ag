import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  setInputUser,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]); // array of body parts to be displayed in the horizontal scrollbar

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts([...bodyPartsData]); // you can add 'all' to the beginning of the array
    };
    fetchExercisesData(); // call the function immediately, as soon as the app starts
  }, []);

  const handleSearch = async () => {
    window.scrollTo({ top: 1790, behavior: "smooth" });
    if (search) {
      // console.log(search); //! Here is the  search value
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search)
      );
      setInputUser(search); //* set the inputUser state to the search value
      setSearch(""); // clear search field
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={70}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="20px"
        textAlign="center"
        color="red"
      >
        Search for Exercises, Target Muscle, Equipment or Body Part
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "900",
              border: "3px solid #FF2625",
              borderRadius: "3px",
              padding: "12px",
              fontSize: "24px",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          height="76px"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value.toLocaleLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <Button
          className="search-btn"
          sx={{
            borderRadius: "2px",
            backgroundColor: "#FF2625",
            color: "#fff",
            fontWeight: "45px",
            border: "none",
            width: { lg: "190px", xs: "14px" },
            fontSize: { lg: "39px", xs: "14px" },
            height: { lg: "61px", xs: "14px" },
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
