import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  Box,
  Button,
  ButtonBase,
  Container,
  Drawer,
  Grid,
  Icon,
  MobileStepper,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"

import ItemBox from "./ItemBox"
import Layout from "./layout"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    flexGrow: 1,
  },
  container: {
    margin: "auto",
  },
  image: {
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    display: "block",
  },
}))

const DashboardPage = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth="md">
          <Box textAlign="center">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component="a"
                  href="/app/documents"
                  classes={{ root: classes.button }}
                >
                  <ItemBox>
                    <StaticImage
                      src="../images/star-icon.png"
                      className={classes.image}
                    />
                    <Typography color="primary" gutterBottom variant="h3">
                      Ready to
                      <br />
                      Get Started
                    </Typography>
                    <DoubleArrowIcon color="primary" />
                  </ItemBox>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component="a"
                  href="/app/reference"
                  classes={{ root: classes.button }}
                >
                  <ItemBox>
                    <StaticImage
                      src="../images/megaphone-icon.png"
                      className={classes.image}
                    />
                    <Typography color="primary" gutterBottom variant="h3">
                      Learn
                      <br />
                      More
                    </Typography>
                    <DoubleArrowIcon color="primary" />
                  </ItemBox>
                </ButtonBase>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default DashboardPage
