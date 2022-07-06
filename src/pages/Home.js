import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import Loader from "../components/Loader";
import ScrollArrow from "../components/ScrollArrow";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      {exercises.length ? <HeroBanner /> : <Loader />}
      {exercises.length ? (
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      ) : (
        <Loader />
      )}
      <ScrollArrow />
      {bodyPart.length ? (
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Home;
