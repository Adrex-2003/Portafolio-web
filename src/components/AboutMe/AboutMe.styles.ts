import type { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  padding: (theme) => theme.spacing(6, 2),
  backgroundColor: (theme) => theme.palette.background.paper,
  color: (theme) => theme.palette.text.primary,
};

export const avatarStyle: SxProps<Theme> = {
  width: 200,
  height: 200,
};

export const textGridStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
