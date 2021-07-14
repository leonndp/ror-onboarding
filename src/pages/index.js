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

const IndexPage = () => {
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
            <Box hidden={activeStep !== 1}>
              <TextField
                fullWidth
                variant="outlined"
                label="Your Location or Ownership Group"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Drop Down"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter first name"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter last name"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter email"
              />
            </Box>
            <Box hidden={activeStep !== 2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Gym Location"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Select Location"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Gym Location"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter Location"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Location ID"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter Location ID"
              />
            </Box>
            <Box hidden={activeStep !== 3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Current Marketing Budget"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter Budget"
              />
            </Box>
            <Box textAlign="center" hidden={activeStep !== 4}>
              <Typography gutterBottom color="primary" variant="h2">
                You're All Set!
              </Typography>
              <Typography>
                Please check your email for a link and access code
              </Typography>
            </Box>
            <Box hidden={activeStep === 4}>
              <MobileStepper
                variant="progress"
                LinearProgressProps={{
                  color: "secondary",
                }}
                steps={4}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext}>
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
