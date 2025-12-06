import { Button, Container, Typography } from "@mui/material";
import { HeroContainer, HeroContent, HeroImage } from "./Hero.styles";
import { CTA_TEXT, HERO_DATA } from './Hero.constants';

const Hero: React.FC = () => {
  const { nombre, rol, mensaje, foto } = HERO_DATA;

  return (
    <HeroContainer id="hero">
      <Container maxWidth="lg">
        <HeroContent>
          <div>
            <Typography className="nombre">{nombre}</Typography>
            <Typography className="rol">{rol}</Typography>
            <Typography className="mensaje">{mensaje}</Typography>

            <Button
              variant="contained"
              size="large"
              className="cta"
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {CTA_TEXT}
            </Button>
          </div>

          <HeroImage src={foto} alt={nombre} />
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
