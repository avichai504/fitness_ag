import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material";

import fitnessModel7 from "../assets/images/fitnessModel7.jpg";
import fitnessModel6 from "../assets/images/fitnessModel6.jpg";
import fitnessModel5 from "../assets/images/fitnessModel5.jpg";
import fitnessModel4 from "../assets/images/fitnessModel4.jpg";
import fitnessModel3 from "../assets/images/fitnessModel3.jpg";
import fitnessModel2 from "../assets/images/fitnessModel2.jpg";
import fitnessModel1 from "../assets/images/fitnessModel1.jpg";

import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";
import food4 from "../assets/images/food4.jpg";
import food5 from "../assets/images/food5.jpg";
import food6 from "../assets/images/food6.jpg";
import food7 from "../assets/images/food7.jpg";
import food8 from "../assets/images/food8.jpg";

import anatomy1 from "../assets/images/anatomy1.jpg";
import anatomy2 from "../assets/images/anatomy2.jpg";
import anatomy3 from "../assets/images/anatomy3.jpg";
import anatomy4 from "../assets/images/anatomy4.jpg";

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
    <Box>
      <Stack padding={10} pl={120} sx={{ color: "wheat", fontSize: "200px" }}>
        Welcome
      </Stack>

      <Stack direction={"row"}>
        <Box
          borderRadius="40px"
          width={1300}
          height={1500}
          sx={{
            backgroundImage: `url(${fitnessModel1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mt: { lg: "90px", xs: "70px" },
            ml: { sm: "20px" },
            mx: { lg: "10px", xs: "20px" },
            pb: "957px",
          }}
        >
          <Typography color={"white"} fontSize={100} align="center">
            Explore Exercises
          </Typography>
        </Box>
        <Box
          borderRadius="40px"
          width={1300}
          height={1500}
          sx={{
            backgroundImage: `url(${food7})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mt: { lg: "90px", xs: "70px" },
            ml: { sm: "20px" },
            mx: { lg: "10px", xs: "20px" },
            pb: "957px",
          }}
        >
          <Typography color={"white"} fontSize={100} align="center">
            Build unique diet program with AI
          </Typography>
        </Box>
        <Box
          borderRadius="40px"
          width={1300}
          height={1500}
          sx={{
            backgroundImage: `url(${anatomy3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mt: { lg: "90px", xs: "70px" },
            ml: { sm: "20px" },
            mx: { lg: "10px", xs: "20px" },
            pb: "957px",
          }}
        >
          <Typography color={"white"} fontSize={100} align="center">
            Learn About Human Anatomy
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Welcome;
