import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navigator(props) {
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
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="" position="fixed">
            <Toolbar style={{ height: "85px" }}>
              <div style={{ marginRight: "auto" }}>
                <Button
                  color="inherit"
                  onClick={() => handleNavigation("home")}
                >
                  <HomeIcon fontSize="large" />
                  <Typography variant="h4">Home</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleNavigation("bodyMap")}
                >
                  <SportsGymnasticsIcon fontSize="large" />
                  <Typography variant="h4">Body Map</Typography>
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleNavigation("exercises")}
                >
                  <FitnessCenterIcon fontSize="large" />
                  <Typography variant="h4">exercises</Typography>
                </Button>
                <Button color="inherit" onClick={handleMenuClick}>
                  <SearchIcon fontSize="large" />
                  <Typography variant="h4">more</Typography>
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
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button color="inherit">
                  <Typography variant="h4">login</Typography>
                </Button>
                <Button color="inherit">
                  <Typography variant="h4">register</Typography>
                </Button>
              </div>
              <AccountCircleIcon fontSize="large" />
            </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
