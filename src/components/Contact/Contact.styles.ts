import type { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = (theme) => ({
  maxWidth: 600,
  margin: "0 auto",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 0,
  border: `1px solid ${theme.palette.divider}`,
});

export const titleStyle: SxProps<Theme> = (theme) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  color: theme.palette.text.primary,
});

export const formControlStyle: SxProps<Theme> = (theme) => ({
  marginBottom: theme.spacing(2),
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
});

export const buttonStyle: SxProps<Theme> = (theme) => ({
  padding: theme.spacing(1.5),
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.contrastText,
});
