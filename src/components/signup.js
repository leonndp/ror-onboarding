import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from "axios"

import {
  Box,
  Button,
  Checkbox,
  Container,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Grid,
  MobileStepper,
  TextField,
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useTheme, makeStyles } from "@material-ui/core/styles"

import Layout from "./layout"
import Seo from "./seo"

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
  crunchLogo: {
    position: "absolute",
    top: "5rem",
    right: "5rem",
    [theme.breakpoints.down("md")]: {
      right: "2rem",
    },
  },
}))

const IndexPage = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    ownershipGroup: "",
    firstName: "",
    lastName: "",
    email: "",
    gymAddress: "",
    gymCity: "",
    gymState: "",
    gymLocationId: "",
    budget: "",
    currentServices: {},
  })
  const [checkboxData, setCheckboxData] = useState({})

  useEffect(() => {
    console.log(formData)
  }, [formData])

  useEffect(() => {
    setFormData({
      ...formData,
      currentServices: {
        ...checkboxData,
      },
    })
  }, [checkboxData])

  const handleFormChange = e => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleCheckboxChange = e => {
    const value = e.target.checked
    setCheckboxData({
      ...checkboxData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://09252ab23cd6b265b7f9b4fbc8c30cf5.m.pipedream.net",
        formData
      )

      console.log("Success!")
    } catch (err) {
      console.log(err)
    }
  }

  const handleNext = () => {
    if (activeStep === 3) {
      handleSubmit()
    }
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
          <StaticImage
            className={classes.crunchLogo}
            src="./../images/crunch-logo.png"
          />
          <Container className={classes.container} maxWidth="sm">
            <Box hidden={activeStep !== 1}>
              <TextField
                name="ownershipGroup"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Your Location or Ownership Group"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter Location or Group"
              />
              <TextField
                name="firstName"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter first name"
              />
              <TextField
                name="lastName"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Last Name"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter last name"
              />
              <TextField
                name="email"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
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
                name="gymAddress"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Gym Location"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter Gym Address"
              />
              <TextField
                name="gymCity"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Gym City"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter city"
              />
              <TextField
                name="gymState"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Location ID"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter state"
              />
              <TextField
                name="gymLocationId"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Location ID"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter id"
              />
            </Box>
            <Box hidden={activeStep !== 3}>
              <TextField
                name="budget"
                onChange={handleFormChange}
                fullWidth
                variant="filled"
                label="Current Marketing Budget"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter Budget"
              />
              <Box clone width="100%">
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Your Current Services
                  </FormLabel>
                  <Grid container spacing={5} justify="space-between">
                    <Grid item>
                      <FormGroup>
                        <FormControlLabel
                          name="paidServices"
                          onChange={handleCheckboxChange}
                          control={<Checkbox />}
                          label="Paid Services"
                        />
                        <FormControlLabel
                          name="paidSearch"
                          onChange={handleCheckboxChange}
                          control={<Checkbox />}
                          label="Paid Search"
                        />
                        <FormControlLabel
                          name="traditionalMedia"
                          onChange={handleCheckboxChange}
                          control={<Checkbox />}
                          label="Traditional Media"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item>
                      <FormGroup>
                        <FormControlLabel
                          name="digitalDisplay"
                          onChange={handleCheckboxChange}
                          control={<Checkbox />}
                          label="Digital Display / OLV"
                        />
                        <FormControlLabel
                          name="acquisitonEmail"
                          onChange={handleCheckboxChange}
                          control={<Checkbox />}
                          label="Acquisition Email"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </FormControl>
              </Box>
            </Box>
            <Box textAlign="center" hidden={activeStep !== 4}>
              <Typography gutterBottom color="primary" variant="h2">
                You're All Set!
              </Typography>
              <Typography>
                Click the link below and enter your generated access code
              </Typography>
              <Box p={2} my={3} bgcolor="common.white">
                <Typography color="secondary" variant="h2">
                  CRUNCH20
                </Typography>
              </Box>
              <Button color="primary" variant="contained" size="large">
                Get Started
              </Button>
            </Box>
            <Box marginTop={3} hidden={activeStep === 4}>
              <MobileStepper
                variant="progress"
                LinearProgressProps={{
                  color: "secondary",
                  style: {
                    marginLeft: "1rem !important",
                  },
                }}
                steps={4}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext}>
                    {activeStep === 3 ? "Submit" : "Next"}
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
