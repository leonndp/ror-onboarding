import React from "react"
import { Link } from "gatsby"
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
          <Box mx={"auto"} textAlign="center">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component={Link}
                  to="/app/documents"
                  classes={{ root: classes.button }}
                >
                  <ItemBox>
                    <Box textAlign="center">
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
                    </Box>
                  </ItemBox>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component={Link}
                  to="/app/resources"
                  classes={{ root: classes.button }}
                >
                  <ItemBox>
                    <Box textAlign="center">
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
                    </Box>
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
