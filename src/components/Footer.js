import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import LOGO from "../assets/icons/Fitness&Education-LOGO.png";
import Logo from "./Logo";

const Footer = () => (
  <Box className="footer"
  m="60px" bgcolor="white" >
    <Stack direction={"row"} gap="10px" sx={{ alignItems: "center" }}>
      <Button>
       <Logo/>
      </Button>

      <Typography
        sx={{ fontSize: { lg: "28px", xs: "17px" } }}
        m="30px"
        textAlign="center"
      >
        Made With 🧡 By AGO productions
      </Typography>
      <Button
        href="mailto:avichai504@gmail.com"
        variant="outlined"
        color="error"
        style={{
          fontWeight: 600,
          marginInline: "auto",
        }}
      >
        Email Us!
      </Button>
    </Stack>
  </Box>
);

export default Footer;
