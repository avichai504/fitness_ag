import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Container } from '@mui/material';

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container maxWidth="xl">
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m='auto' >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
    </Container>
  );
};

export default App;
