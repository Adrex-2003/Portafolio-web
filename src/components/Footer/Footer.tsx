import { Box, Typography } from "@mui/material";
import type { FooterProps } from "./Footer.types";
import { FOOTER_DEFAULTS } from "./Footer.constants";
import {
  footerContainer,
  footerText,
  footerName,
} from "./Footer.styles";

const Footer = ({
  nombre = FOOTER_DEFAULTS.nombre,
  descripcion = FOOTER_DEFAULTS.descripcion,
  year = FOOTER_DEFAULTS.year,
}: FooterProps) => {
  return (
    <Box component="footer" sx={footerContainer}>
      <Typography variant="h6" sx={footerName}>
        {nombre}
      </Typography>

      <Typography variant="body2" sx={footerText}>
        {descripcion}
      </Typography>

      <Typography variant="body2" sx={footerText} mt={1}>
        © {year}  Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
