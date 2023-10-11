import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography} from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts([...bodyPartsData]);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      id="search-field"
      alignItems="center"
      mt="37px"
      className="search-filed-container"

    >
      <Box position="relative" mb="72px"
      >
        <Typography
        sx={{
          fontSize:"22px"
        }}
        >
          Go for it! Search any exercise you can think of!
        </Typography>
        <TextField
           sx={{
            input: { 
              fontWeight: "900", 
            },
            width: { lg: "1000px", sm: "450px", xs: "250px" },
            backgroundColor: "var(--white-color)", 
            textTransform: "none",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            // bgcolor: "var(--white-color)",
            border: "solid 2px black",
            color: "var(--black-color)",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            fontWeight:"bold",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        className="horizontal-menu-container"
        sx={{
          position: "relative",
          width: "100%",
          p: "2px",
        }}
      >
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
