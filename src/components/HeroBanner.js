import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/gymWoman.jpg";
import "../App.css";

const myColor = "#a09000";

// Reusable Inline React Component for the anchor tags turned into buttons
const StyledLinkButton = ({ href, children }) => {
  return (
    <Button
      href={href}
      style={{
        marginInline: "auto",
        marginTop: "22px",
        width: "200px",
        textAlign: "center",
        padding: "4px",
        fontSize: "22px",
        textTransform: "none",
        color: "black",
        border: "solid 3px black",
        borderRadius: "4px",
        backgroundColor: myColor,
      }}
    >
      {children}
    </Button>
  );
};

const HeroBanner = () => (
  <Box className="hero-banner-box" position="relative" p="20px">
    <Typography color={myColor} fontWeight="600" fontSize="26px">
      Fitness & Education
    </Typography>
    <Typography
      className="hero-banner-typo"
      fontWeight={700}
      fontSize="28px"
      mb="23px"
      mt="30px"
    >
      Learn About Human Anatomy, <br /> And Practice Throw Unique Exercises!
    </Typography>
    <Typography fontSize="25px" fontFamily="Alegreya" lineHeight="35px">
      Daily exercise cultivates vitality, ensuring a vibrant tomorrow with every
      active step today.
    </Typography>
    <Stack direction={"row"} gap={6}>
      <StyledLinkButton href="#body-map-container">Anatomy</StyledLinkButton>
      <StyledLinkButton href="#search-field">Exercises</StyledLinkButton>
      <StyledLinkButton href="#diet-ai">Diet AI</StyledLinkButton>
    </Stack>
    <Typography
      className="hero-banner-typo-footer"
      fontWeight={600}
      color={myColor}
      fontSize="120px"
    >
      Fitness & Education
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
