import React from "react";

import BodyPartIcon from "../assets/icons/body-part.png";
import TargetIcon from "../assets/icons/target.png";
import EquipmentIcon from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartIcon,
      name: bodyPart,
    },
    {
      icon: TargetIcon,
      name: target,
    },
    {
      icon: EquipmentIcon,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
          variant="h6"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" alignItems="center" gap="24px">
            <Button
              sx={{
                background: "#fff2db",
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
            <Typography textTransform="capitalize" variant="h4">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
