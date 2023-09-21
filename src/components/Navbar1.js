import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";

export default function Navigator() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (location) => {
    // Assuming you'd use something like 'react-scroll' or another method to navigate/scroll
    // scrollTo(location);
    handleMenuClose();
  };

  return (
    <AppBar color="default" position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={() => handleNavigation("home")}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h2" style={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit" onClick={() => handleNavigation("bodyMap")}>
          Body Map
        </Button>
        <Button color="inherit" onClick={() => handleNavigation("exercises")}>
          Exercises
        </Button>
        <Button color="inherit" onClick={handleMenuClick}>
          Explore More
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {/* Add menu items here */}
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        </Menu>
        <div style={{ marginLeft: "auto" }}>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
