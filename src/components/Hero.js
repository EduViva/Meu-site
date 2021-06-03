import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ExternalIcon from "@material-ui/icons/LaunchRounded";
import withStyles from "@material-ui/core/styles/withStyles";

const Hero = ({ classes }) => {
  const ref = React.useRef();
  return (
    <Box display="flex">
      <Box py={3} className={classes.container}>
        <Typography color="secondary" gutterBottom>
          <b>UX / UI / Product Designer</b>
        </Typography>
        <Typography color="textPrimary" variant="h3" style={{ marginBottom: -15 }}>
          Olá
        </Typography>
        <Typography color="textPrimary" variant="h3" style={{ fontWeight: 300 }} paragraph>
          meu nome é{" "}
          <Typography color="primary" variant="h3" component="span">
            <b>Eduardo</b>
          </Typography>
        </Typography>
        <Typography color="textPrimary" style={{ marginTop: 32 }} paragraph>
          Meu <b>objetivo</b> é melhorar o mundo entregando experiências melhores através do design. Serei referência no
          meu trabalho, por isso tenho a <b>meta</b> de alcançar Design Lead em 5 anos.
        </Typography>
        <Typography color="textPrimary" paragraph>
          Também faço projetos pessoais de dev por hobby.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Button color="secondary" variant="contained" href="#projetos" fullWidth disableElevation>
              <Typography variant="body2">
                <b>Meus projetos</b>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button color="primary" variant="contained" href="Currículo UX UI - Eduardo Viva Leal.pdf" endIcon={<ExternalIcon />} fullWidth disableElevation>
              <Typography variant="body2">
                <b>Meu currículo</b>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box flexGrow={1} className={classes.boxContainer}>
        <Box width={500} height={500} bgcolor="auxiliar.light" className={classes.boxes}>
          <Box width="94%" height="94%" bgcolor="secondary.light" className={classes.boxes}>
            <Box width="95%" height="95%" bgcolor="primary.light" className={classes.boxes}>
              <Image renderRef={ref} />
            </Box>
          </Box>
        </Box>
        <Box width={500} height={500} bgcolor="auxiliar.light" className={classes.boxes}>
          <Box
            width="94%"
            height="94%"
            bgcolor="secondary.light"
            className={classes.boxes}
            style={{ position: "relative" }}>
            <Box ref={ref} width="95%" height="95%" bgcolor="primary.light" className={classes.boxes}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const style = theme => ({
  container: {
    maxWidth: "55%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
  boxContainer: {
    zIndex: -5,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& > .MuiBox-root": {
      "&:nth-of-type(1)": {
        transform: "rotate(45deg)",
      },
      top: -10,
      right: -130,
      position: "absolute",
    },
  },
  boxes: {
    borderRadius: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.image": {
      transform: "rotate(45deg)",
      overflow: "hidden",
    },
  },
  image: {
    position: "absolute",
    transform: "rotate(-45deg) translate(-130px)",
  },
});

const Image = withStyles(style)(({ renderRef, classes }) => {
  const Boxe = () => (
    <Box width="95%" height="95%" bgcolor="primary.main" className={`${classes.boxes} image`}>
      <img src="images/foto.png" alt="" className={classes.image} />
    </Box>
  );
  return renderRef && renderRef.current ? ReactDOM.createPortal(<Boxe />, renderRef.current) : <Boxe />;
});

export default withStyles(style)(Hero);
