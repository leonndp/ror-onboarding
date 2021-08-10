import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"
import { Formik, Form, Field } from "formik"
import { CheckboxWithLabel, TextField } from "formik-material-ui"
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
  /* TextField, */
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useTheme, makeStyles } from "@material-ui/core/styles"

import Layout from "./../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {},
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
  const [resStatus, setResStatus] = useState({})

  useEffect(() => {
    if (isLoggedIn()) {
      console.log(true)
      navigate("/app/dashboard")
    }
  }, [])

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
          <StaticImage
            className={classes.crunchLogo}
            src="./../images/crunch-logo.png"
          />
          <Container className={classes.container} maxWidth="sm">
            <Formik
              initialValues={{
                ownershipGroup: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                gymAddress: "",
                gymCity: "",
                gymState: "",
                gymLocationId: "",
                budget: "",
                title: "",
                services: [],
              }}
              validate={values => {
                const errors = {}
                Object.keys(values).forEach(value => {
                  if (!values[value] && value !== "services") {
                    errors[value] = "Required"
                  }
                })
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address"
                }
                return errors
              }}
              onSubmit={async values => {
                try {
                  const res = await axios.post(
                    "https://09252ab23cd6b265b7f9b4fbc8c30cf5.m.pipedream.net",
                    values
                  )
                  console.log(values)
                  handleNext()
                  setResStatus({
                    status: res.status,
                    severity: "success",
                    message: "Success! Your contact details have been sent.",
                  })
                } catch (err) {
                  setResStatus({
                    status: err.error,
                    severity: "error",
                    message: "An error occurred while processing your request.",
                  })
                }
              }}
            >
              {({ submitForm, isSubmitting, errors }) => (
                <Form>
                  <Box hidden={activeStep !== 1}>
                    <Field
                      name="ownershipGroup"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Ownership Group"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter Ownership Group"
                    />
                    <Field
                      name="firstName"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="First Name"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter first name"
                    />
                    <Field
                      name="lastName"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Last Name"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter last name"
                    />
                    <Field
                      name="email"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Email"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter email"
                    />
                    <Field
                      name="phone"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Phone"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter phone number"
                    />
                    <Field
                      name="title"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Title"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter Title"
                    />
                  </Box>
                  <Box hidden={activeStep !== 2}>
                    <Field
                      name="gymAddress"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Main or Headquarter Address for the Ownership Group"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter Address"
                    />
                    <Field
                      name="gymCity"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Main or Headquarter City for the Ownership Group"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter City"
                    />
                    <Field
                      name="gymState"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Main or Headquarter State for the Ownership Group"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter State"
                    />
                    <Field
                      name="gymLocationId"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Number of Locations"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Location Quantity"
                    />
                  </Box>
                  <Box hidden={activeStep !== 3}>
                    <Field
                      name="budget"
                      component={TextField}
                      fullWidth
                      variant="filled"
                      label="Current Marketing Budget"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      placeholder="Enter Budget"
                    />
                    <Box color="text.primary" clone width="100%">
                      <FormControl component="fieldset">
                        <Box mt={2}>
                          <FormLabel component="legend">
                            Your Current Services
                          </FormLabel>
                        </Box>
                        <Grid container spacing={5} justify="space-between">
                          <Grid item xs>
                            <FormGroup>
                              <Field
                                name="services"
                                component={CheckboxWithLabel}
                                control={<Checkbox />}
                                Label={{ label: "Paid Social" }}
                                type="checkbox"
                                value="Paid Social"
                              />
                              <Field
                                name="services"
                                component={CheckboxWithLabel}
                                control={<Checkbox />}
                                Label={{ label: "Traditional Media" }}
                                type="checkbox"
                                value="Traditional Media"
                              />
                            </FormGroup>
                          </Grid>
                          <Grid item xs>
                            <FormGroup>
                              <Field
                                name="services"
                                component={CheckboxWithLabel}
                                control={<Checkbox />}
                                Label={{ label: "Digital Display / OLV" }}
                                type="checkbox"
                                value="Digital Display / OLV"
                              />
                              <Field
                                name="services"
                                component={CheckboxWithLabel}
                                control={<Checkbox />}
                                Label={{ label: "Acquisition Email" }}
                                type="checkbox"
                                value="Acquisition Email"
                              />
                            </FormGroup>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box mt={2} hidden={activeStep === 4}>
                    <MobileStepper
                      variant="progress"
                      /* LinearProgressProps={{
                  color: "secondary",
                  style: {
                    marginLeft: "1rem !important",
                  },
                }} */
                      steps={4}
                      position="static"
                      activeStep={activeStep}
                      nextButton={
                        <Button
                          size="small"
                          onClick={e => {
                            if (activeStep === 3) {
                              submitForm(e)
                            } else {
                              handleNext(e)
                            }
                          }}
                          style={{ marginLeft: "1rem" }}
                          disabled={
                            activeStep === 3 &&
                            JSON.stringify(errors) !== JSON.stringify({})
                          }
                        >
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
                          style={{ marginRight: "1rem" }}
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
                </Form>
              )}
            </Formik>
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
              <Button
                component={Link}
                to="/app/login"
                color="primary"
                variant="contained"
                size="large"
              >
                Get Started
              </Button>
            </Box>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
