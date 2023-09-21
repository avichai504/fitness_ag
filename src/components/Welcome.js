import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material";

import Avatar2 from "../assets/images/Avatar2.JPG";
import GymWoman from "../assets/images/gymWoman.jpg";
import GymMan from "../assets/images/gymMan.jpg";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "15px",
  marginTop: theme.spacing(12), // equivalent to "120px"
  borderRadius: "20px",
  fontSize: "26px",
  "&:hover": {
    backgroundColor: "black",
  },
}));

const Welcome = () => {
  const exercisesLocation = 1200;
  const bodyMapLocation = 300;

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 15 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToExercises = () => {
    window.scrollTo({ top: exercisesLocation, behavior: "smooth" });
  };
  const scrollToBodyMap = () => {
    window.scrollTo({ top: bodyMapLocation, behavior: "smooth" });
  };

  return (
    <Box
      borderRadius="40px"
      // width={2000}
      sx={{
        // backgroundImage: "url(https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg)",
        // backgroundImage: `url(${Avatar2})`,
        // backgroundImage: `url(${GymWoman})`,
        backgroundImage: `url(${GymMan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        mt: { lg: "90px", xs: "70px" },
        ml: { sm: "20px" },
        mx: { lg: "10px", xs: "20px" },
        pb: "957px",
      }}
    >
      <Typography color={"white"} fontSize={100} align="center">
        Are you Ready to swat?
      </Typography>
    </Box>
  );
};

export default Welcome;
