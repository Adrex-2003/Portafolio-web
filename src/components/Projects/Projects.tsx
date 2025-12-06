import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  useTheme,
} from '@mui/material';

import { PROYECTOS } from './Projects.constants';
import { cardStyle, mediaStyle } from './Projects.styles';

const Proyectos = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="proyectos"
      sx={{
        padding: theme.spacing(8, 2),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        fontWeight={700}
        color={theme.palette.text.primary}
      >
        Proyectos
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          marginTop: theme.spacing(2),
        }}
      >
        {PROYECTOS.map((proyecto) => (
          <Box
            key={proyecto.id}
            sx={{
              width: {
                xs: '100%',
                sm: '48%',
                md: '30%',
              },
              display: 'flex',
            }}
          >
            <Card
              sx={{
                ...cardStyle(theme),
                flexGrow: 1,
              }}
            >
              <CardMedia
                component="img"
                image={proyecto.imagen}
                alt={proyecto.titulo}
                sx={mediaStyle(theme)}
              />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {proyecto.titulo}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {proyecto.descripcion}
                </Typography>
              </CardContent>

              {proyecto.enlace && (
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Proyecto
                  </Button>
                </CardActions>
              )}
            </Card>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Proyectos;


