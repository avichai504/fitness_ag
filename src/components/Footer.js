import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  const navigator = useNavigate();
  const handleLogoClick = () => {
    navigator("/");
  };

  return (
    <Box className="footer" m="60px" bgcolor="white">
      <Stack direction={"row"} gap="10px" sx={{ alignItems: "center" }}>
        <Button onClick={handleLogoClick}>
          <Logo width="160px" height="160px" />
        </Button>

        <Typography
          sx={{ fontSize: { lg: "28px", xs: "17px" } }}
          m="30px"
          textAlign="center"
        >
          Made With ❣ By AGO productions
        </Typography>
        <Button
          href="mailto:avichai504@gmail.com"
          variant="outlined"
          color="error"
          style={{
            fontSize: "18px",
            fontWeight: 900,
            marginInline: "auto",
          }}
        >
          Email Us!
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
