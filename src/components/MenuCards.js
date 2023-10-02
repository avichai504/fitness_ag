import { Box, Typography, Stack, Button } from "@mui/material";
import "../App.css";
import fitnessModel1 from "../assets/images/gymWoman.jpg";
import food7 from "../assets/images/gymMan.jpg";
import anatomy3 from "../assets/images/gymWoman.jpg";

const MenuCards = () => {
  const content = [
    {
      id: "body-map-container",
      image: anatomy3,
      text: "Learn About Human Anatomy",
    },
    { id: "search-exercises", image: fitnessModel1, text: "Explore Exercises" },
    { id: "diet", image: food7, text: "Unique diet program with AI" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack id="menu-cards" className="flip-stack" direction={"row"}>
      {content.map((item, index) => (
        <Button key={index} type="button" onClick={() => handleScroll(item.id)}>
          <Box key={index} className="flip-box">
            <Box className="flip">
              <Box
                className="front"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Typography color={"white"} fontSize={59} align="center">
                  {item.text}
                </Typography>
              </Box>
              <Box className="back">
                <Typography color={"white"} fontSize={59} align="center">
                  More Info About {item.text}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Button>
      ))}
    </Stack>
  );
};

export default MenuCards;
