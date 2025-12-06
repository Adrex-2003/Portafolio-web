import type { SxProps, Theme } from "@mui/material";

export const footerContainer: SxProps<Theme> = (theme) => ({
  padding: theme.spacing(4, 2),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  textAlign: "center",
});

export const footerText: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
});

export const footerName: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
});
