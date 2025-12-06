import React from "react";
import { Box, Typography, Avatar, useTheme } from "@mui/material";
import { SOBRE_MI_CONSTANTS } from "./AboutMe.constants";
import { containerStyle, avatarStyle, textGridStyle } from "./AboutMe.styles";

const SobreMi: React.FC = () => {
  const theme = useTheme();

  const { nombre, bio, foto, experiencia, enfoque, tecnologias, extra } = SOBRE_MI_CONSTANTS;

  return (
    <Box
      component="section"
      id="sobre-mi"
      sx={{
        ...containerStyle,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(4),
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "33%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={foto}
            alt={nombre}
            sx={{
              ...avatarStyle,
              width: 250,
              height: 250,
              borderRadius: "50%",
              boxShadow: theme.shadows[4],
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            ...textGridStyle,
          }}
        >
          <Typography variant="h4" gutterBottom fontWeight={700} color={theme.palette.text.primary}>
            {nombre}
          </Typography>

          <Typography variant="body1" paragraph color={theme.palette.text.secondary}>
            {bio}
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>Experiencia:</strong> {experiencia}
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>Enfoque:</strong> {enfoque}
          </Typography>

          <Typography variant="body2" paragraph>
            <strong>Tecnologías:</strong> {tecnologias}
          </Typography>

          <Typography variant="h6" mt={3} fontWeight={700} color={theme.palette.text.primary}>
            Más sobre mí
          </Typography>

          {extra.map((linea, index) => (
            <Typography key={index} variant="body2" paragraph color={theme.palette.text.secondary}>
              • {linea}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SobreMi;
