import { Container, Typography, Stack, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import theme from "../../styles/theme";
import { IoCloseCircle } from "react-icons/io5";

const Onboarding = () => {
  const [close, setClose] = useState("flex");

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dataOnboarding = [
    {
      number: 1,
      title: "DESCARGÁ LA APP",
      text: "Disponible para iOS y Android",
    },
    {
      number: 2,
      title: "VENDÉ LO QUE NO USAS",
      text: "Vendés. Enviás. Cobrás.",
    },
    {
      number: 3,
      title: "COMPRÁ LO QUE QUERÉS",
      text: "Comprás. Recibís. Disfrutás.",
    },
  ];

  const closeOnBoarding = () => {
    setClose("none");
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 1px 5px rgba(66, 65, 67, 0.1)",
        width: "100%",
        display: close,
        position: "relative",
      }}
    >
      <Container>
        <Box
          sx={{
            position: "absolute",
            right: "5px",
            top: "5px",
            cursor: "pointer",
          }}
        >
          <IoCloseCircle
            fontSize="24px"
            color="#BABCBE"
            onClick={closeOnBoarding}
          />
        </Box>

        <Stack
          sx={{
            paddingTop: isMobile ? "18px" : "16px",
            paddingBottom: isMobile ? "18px" : "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
          direction="row"
          spacing={8}
        >
          {dataOnboarding.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "2.5px solid #443988",
                  boxSizing: "border-box",
                  borderRadius: "100px",
                  height: "37px",
                  width: "37px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: theme.palette.primary.main, lineHeight: "18px" }}
                >
                  {item.number}
                </Typography>
              </Box>
              <Box sx={{ pl: "10px" }}>
                <Typography
                  sx={{
                    fontSize: theme.typography.fontSize[7],
                    color: theme.palette.primary.main,
                    fontWeight: theme.typography.fontWeightMedium,
                    lineHeight: "18px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: theme.typography.fontSize[4],
                    color: "hsla(0, 0%, 53%, 1)",
                    fontWeight: theme.typography.fontWeightMedium,
                    lineHeight: "12px",
                    marginTop: "7px",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Onboarding;
