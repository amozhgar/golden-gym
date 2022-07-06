import { Box, Paper, Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" square direction="row">
        <Switch onClick={() => setMode(!mode)}></Switch>
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
