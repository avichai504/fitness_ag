import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const navigate = useNavigate();

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  const handleGoBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleGoBackHome} className="detail-btn">
        Home
      </button>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            sx={{ fontSize: { lg: "64px", xs: "30px" } }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {name}
            <br />
          </Typography>
          {exerciseDetail.instructions ? (
            <ol>
              {exerciseDetail.instructions.map((instruction, index) => (
                <li key={index}>
                  <Typography sx={{ fontSize: { lg: "30px", xs: "18px" } }}>
                    <h5>
                      {instruction} <br /> <br />
                    </h5>
                  </Typography>
                </li>
              ))}
            </ol>
          ) : (
            <Typography>
              No instructions available for {name} exercise
            </Typography>
          )}
          {extraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "30px", xs: "20px" } }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Detail;
