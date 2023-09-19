import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "15px",
  marginTop: theme.spacing(12), // equivalent to "120px"
  borderRadius: "20px",
  fontSize: "26px",
}));

const HeroBanner = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToExercises = () => {
    window.scrollTo({ top: 2500, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        backgroundColor: "", // Black background
        mt: { lg: "390px", xs: "70px" },
        ml: { sm: "20px" },
        mx: { lg: "10px", xs: "20px" },
      }}
      position="relative"
      p="40px"
      pb="400px"
    >
      <Typography
        sx={{
          transform: scrolled
            ? "scale(1.29) perspective(5000px) rotateX(360deg) rotateY(10deg) "
            : "none", // 3D effect
          transition: "transform 0.85s",
        }}
        pb="100px"
        pl="155px"
        color="black"
        fontWeight="750"
        fontSize="38px"
      >
        Welcome! <br /> I'm Avichai and this is my React project.
        <br /> Have fun :)
      </Typography>

      <Typography fontSize="55px" lineHeight={"60px"} mb={3.59} color="gray">
        Regular exercise and training are essential for the body. They not only
        improve your physical health but also uplift your mental well-being.
      </Typography>

      <Stack direction={"row"} pl="0px" gap="150px">
        <StyledButton
          onClick={scrollToExercises}
          variant="contained"
          color="error"
        >
          Explore Body Map
        </StyledButton>
        <StyledButton
          onClick={scrollToExercises}
          variant="contained"
          color="error"
        >
          Explore Exercises
        </StyledButton>
        <StyledButton
          onClick={scrollToExercises}
          variant="contained"
          color="error"
        >
          Explore Exercises
        </StyledButton>
      </Stack>

      <Typography
        fontWeight={190}
        fontSize="140px"
        color="#FF2625"
        mb="90px"
        mt="90px"
        sx={{
          opacity: 0.39,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>

      <Box sx={{ height: "300px", width: "500px", backgroundColor: "gray" }}>
        {/* Placeholder for the reactive map. Adjust height and width as needed */}
      </Box>
    </Box>
  );
};

export default HeroBanner;
