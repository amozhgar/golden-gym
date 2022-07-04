import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/pngegg.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exrecise
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "-9000px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercies
      </Typography>
      <img
        src={HeroBannerImage}
        alt="herobanner"
        className="hero-banner-img"
        sx={{ borderRadius: "50%" }}
      />
    </Box>
  );
};

export default HeroBanner;
