import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "C://VS_code/Web_Projects/fitness_ag/src/assets/images/MuscleMap1.png";

const HeroBanner = () => {

  const scrollToExercises = () => {
    window.scrollTo({top:1120, behavior:"smooth" })

  }


  return (
    <Box
      sx={{
    
        mt: { lg: "190px", xs: "70px" },
        ml: { sm: "20px" },
        mx: { lg: "0", xs: "20px" },
      }}
      position="relative"
      p="20px"
    >
      <Box
        sx={{
          mt: { lg: "-77px", xs: "70px" },
        }}
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="36px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          m="30px"
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="32px" lineHeight={"35px"} mb={2.59}>
          Check out the most effective workouts <br /> for your body
        </Typography>
        <Button
          onClick={scrollToExercises}
          variant="contained"
          color="error"
          fontSize="18px"
          
          sx={{
            backgroundColor: "black",
            padding: "18px",
            marginTop: "20px",
            fontSize: "18px",
            boxShadow: '0px 0px 12px 12px rgb(241 0 0 / 42%), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
            borderRadius: "20px",
          }}
        >
          Explore Exercises
        </Button>
      </Box>
      <Typography
        fontWeight={190}
        fontSize="140px"
        color="#FF2625"
        mb="90px"
        mt="90px"
        sx={{
          opacity: 0.39,
          display: { lg: "block", xs: "none" }
        }}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="HeroBanner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

//! We is it don't work?


