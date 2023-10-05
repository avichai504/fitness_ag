import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";

import banner from "../assets/images/gymMan2.jpg";

export default function HeroSection() {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);

  return (
    <Paper
      id="about"
      style={{
        paddingTop: "110px",
        background: "none",
        height: "90vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          zIndex: 1,
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition:"center",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 2,
        }}
      ></div>
      <Container
        style={{
          color: "white",
          zIndex: 100,
          maxWidth: "60%",
          marginRight: "-40px",
        }}
      >
        <Zoom in={shouldShow}>
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="flex-start"
          >
            <Grid item sm={11}>
              <Hidden xsDown>
                <Typography variant="h4" style={{ fontFamily: "cursive" }}>
                  Exercise not only adds years to life <br /> but also life to
                  years.
                </Typography>
              </Hidden>
            </Grid>
            <Grid item sm={11}>
              <Box mt={6}></Box>
            </Grid>
            <Hidden xsDown>
              <Grid item>
                <Typography variant="h5" style={{color:"black"}}>Check Our Social Media!</Typography>
                <Social direction="row" />
              </Grid>
            </Hidden>
          </Grid>
        </Zoom>
      </Container>
    </Paper>
  );
}
