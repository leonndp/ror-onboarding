import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { handleLogin, isLoggedIn } from "../services/auth"

import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  MobileStepper,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useTheme, makeStyles } from "@material-ui/core/styles"

import Layout from "./layout"
import Seo from "./seo"
import { navigate } from "@reach/router"

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

const LoginPage = () => {
  const theme = useTheme()
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (isLoggedIn()) {
      console.log(true)
      navigate("/app/dashboard")
    }
  }, [])

  const handleUpdate = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!handleLogin(password)) {
      setError(true)
      return false
    }
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <StaticImage
          className={classes.crunchLogo}
          src="./../images/crunch-logo.png"
        />
        <Container className={classes.container} maxWidth="sm">
          <Typography color="textPrimary" variant="h4">
            Password protected site
          </Typography>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={error}
            onClose={() => setError(false)}
            message="Incorrect Password"
          />
          <form
            method="post"
            onSubmit={event => {
              handleSubmit(event)
              navigate(`/app/dashboard`)
            }}
          >
            <Box my={3}>
              <TextField
                fullWidth
                variant="filled"
                label="Please enter your password to get access"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                placeholder="Enter access code"
                type="password"
                onChange={handleUpdate}
                value={password}
              />
            </Box>
            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </>
  )
}

export default LoginPage
