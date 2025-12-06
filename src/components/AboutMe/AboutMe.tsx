import React from "react";
import { Box, Typography, Avatar, useTheme, Grid } from "@mui/material";
import type { SobreMiProps } from "./AboutMe.types";
import { containerStyle, avatarStyle, textGridStyle } from "./AboutMe.styles";

const SobreMi: React.FC<SobreMiProps> = ({
    nombre,
    bio,
    foto,
    experiencia,
    enfoque,
    tecnologias,
}) => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="sobre-mi"
            sx={{
                ...containerStyle,
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
            }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Box
                    sx={{
                        width: { xs: "100%", md: "33%" },
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Avatar src={foto} alt={nombre} sx={avatarStyle} />
                </Box>
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        ...textGridStyle,
                    }}
                >
                    <Typography variant="h4" gutterBottom fontWeight={700}>
                        {nombre}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {bio}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Experiencia:</strong> {experiencia}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Enfoque:</strong> {enfoque}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Tecnologías:</strong> {tecnologias}
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
};

export default SobreMi;
