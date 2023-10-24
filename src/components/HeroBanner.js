/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import "../App.css";

// Reusable Inline React Component for the anchor tags turned into buttons
const StyledLinkButton = ({ to, children }) => {
  const navigator = useNavigate();

  return (
    <Button
      className="hero-buttons"
      onClick={() => navigator(`/${to}`)}
      style={{
        marginInline: "auto",
        marginTop: "22px",
        width: "200px",
        textAlign: "center",
        padding: "3px",
        fontSize: "22px",
        textTransform: "none",
        color: "var(--black-color)",
        fontWeight: "bold",
        border: "solid 7px var(--white-color)",
        borderRadius: "14px",
        opacity: "0.86",
        backgroundColor: "var(--primary-color)",
      }}
    >
      {children}
    </Button>
  );
};

const HeroBanner = () => (
  <Box className="hero-banner-box" position="relative" p="20px">
    <Typography color={"var(--primary-color)"} fontWeight="600" fontSize="26px">
      Fitness & Education
    </Typography>
    <Typography className="hero-banner-typo" mb="43px" mt="-10px"></Typography>
    <Typography fontSize="25px" lineHeight="35px">
      Daily exercise cultivates vitality, ensuring a vibrant tomorrow with every
      active step today.
    </Typography>
    <Stack direction={"row"} gap={0} className="stack-button">
      <StyledLinkButton to="anatomy">Anatomy</StyledLinkButton>
      <StyledLinkButton to="diet">Diet AI</StyledLinkButton>
    </Stack>
    <div className="logo-container">
      <a href="/">
        <Logo width="230px" height="230px" />
      </a>
    </div>
    <Typography
      className="hero-banner-typo-footer"
      fontWeight={90}
      color={"var(--primary-color)"}
      sx={{
        fontSize: { xs: "50px", lg: "100px" },
      }}
    >
      Fitness & Education
    </Typography>
    {/* <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" /> */}
  </Box>
);

export default HeroBanner;
