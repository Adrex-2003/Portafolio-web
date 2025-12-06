import { styled } from "@mui/material/styles";

export const HeroContainer = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const HeroContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(6),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },

  "& .nombre": {
    ...theme.typography.h1,
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },

  "& .rol": {
    ...theme.typography.h4,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },

  "& .mensaje": {
    ...theme.typography.body1,
    marginBottom: theme.spacing(4),
    maxWidth: "450px",
    color: theme.palette.text.secondary,
  },

  "& .cta": {
    padding: theme.spacing(1.5, 4),
    fontSize: "1.1rem",
    fontWeight: 600,
    borderRadius: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const HeroImage = styled("img")(({ theme }) => ({
  width: 280,
  height: 280,
  borderRadius: "50%",
  objectFit: "cover",
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: theme.shadows[4],

  [theme.breakpoints.down("sm")]: {
    width: 200,
    height: 200,
  },
}));
