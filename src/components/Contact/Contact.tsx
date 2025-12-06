import { useState } from "react";
import { Box, TextField, Button, Typography, Alert, useTheme } from "@mui/material";
import type { ContactoProps } from "./Contact.types";
import { CONTACTO_DEFAULTS } from "./Contact.constants";
import { containerStyle, titleStyle, formControlStyle, buttonStyle } from "./Contact.styles";

const Contacto = ({
  titulo = CONTACTO_DEFAULTS.titulo,
  descripcion = CONTACTO_DEFAULTS.descripcion,
}: ContactoProps) => {
  const theme = useTheme();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !correo || !mensaje) {
      return alert("Todos los campos son obligatorios.");
    }
    setEnviado(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <Box
      id="contacto"
      sx={{
        width: "100%",
        minHeight: "70vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingY: 8,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        <Box sx={{ ...containerStyle }}>
          <Typography variant="h4" sx={titleStyle}>
            {titulo}
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            mb={3}
            color="text.secondary"
          >
            {descripcion}
          </Typography>

          {enviado && (
            <Alert severity="success" sx={{ mb: 2 }}>
              ¡Mensaje enviado correctamente!
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              sx={formControlStyle}
            />

            <TextField
              label="Correo"
              fullWidth
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              sx={formControlStyle}
            />

            <TextField
              label="Mensaje"
              fullWidth
              multiline
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              sx={formControlStyle}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={buttonStyle}
            >
              Enviar Mensaje
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacto;
