import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  MobileStepper,
  TextField,
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useTheme, makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
}))

const LoginPage = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(1)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const classes = useStyles()

  return (
    <>
      <Layout drawerView="login">
        <div className={classes.root}>
          <Container className={classes.container} maxWidth="sm">
            <Typography color="textPrimary" variant="h3">
              Password protected site
            </Typography>
            <Box my={3}>
              <TextField
                fullWidth
                variant="filled"
                label="Please enter your password to get access"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Drop Down"
                type="password"
              />
            </Box>
            <Button color="primary" variant="contained" size="large">
              Submit
            </Button>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default LoginPage
