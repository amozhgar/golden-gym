import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Loader from "./Loader";

const Navbar = () => {
  return (
    <Loader /> && (
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "45px", height: "45px", margin: "0 40px" }}
          />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#000",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Exercies
          </a>
        </Stack>
      </Stack>
    )
  );
};

export default Navbar;
