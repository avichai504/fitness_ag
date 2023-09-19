import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [activeLink, setActiveLink] = useState("home"); // by default, home is active

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY >= 1500) {
        setActiveLink("experience");
      } else {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fontSizeBasedOnScroll = scrollY > 5 ? "46px" : "46px";

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        px: "20px",
        backgroundColor: scrollY > 50 ? "" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(6px)" : "none",
        transition: "background-color 1s, font-size 1s, backdrop-filter 1s",
        position: "fixed",
        zIndex: 1000,
        top: -32,
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "68px", height: "68px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize={fontSizeBasedOnScroll}
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: activeLink === "home" ? "10px solid #FF2625" : "none",
          }}
        >
          Home
        </Link>
        <a
          href="#experience"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom:
              activeLink === "experience" ? "10px solid #FF2625" : "none",
          }}
        >
          Experience
        </a>
      </Stack>
      <Stack
        direction="row"
        gap="40px"
        fontSize={fontSizeBasedOnScroll}
        alignItems="flex-end"
        sx={{ pl: "500px" }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Register
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
