import { Box, Typography, Stack } from "@mui/material";
import "../App.css";
import fitnessModel1 from "../assets/images/fitnessModel1.jpg";
import food7 from "../assets/images/food7.jpg";
import anatomy3 from "../assets/images/anatomy3.jpg";

const MenuCards = () => {
  const content = [
    { image: anatomy3, text: "Learn About Human Anatomy" },
    { image: fitnessModel1, text: "Explore Exercises" },
    { image: food7, text: "Unique diet program with AI" },
  ];

  return (
    <Stack className="flip-stack" direction={"row"}>
      {content.map((item, index) => (
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
      ))}
    </Stack>
  );
};

export default MenuCards;
