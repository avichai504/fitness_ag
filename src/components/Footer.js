import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import LOGO from "../assets/icons/Fitness&Education-LOGO.png";

const Footer = () => (
  <Box mt="60px" bgcolor="white">
    <Stack direction={"row"} gap="10px" sx={{ alignItems: "center" }}>
      <Button>
        <img
          src={LOGO}
          alt="logo"
          style={{ width: "150px", height: "150px", borderRadius: "100px" }}
        />
      </Button>

      <Typography
        sx={{ fontSize: { lg: "28px", xs: "17px" } }}
        m="30px"
        textAlign="center"
      >
        Made by Avichai Gal-Or
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
