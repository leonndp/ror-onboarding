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
  TextField,
  Typography,
} from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { useTheme, makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import Seo from "../components/seo"
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
}))

const LoginPage = () => {
  const theme = useTheme()
  const [password, setPassword] = useState("")

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
    handleLogin(password)
  }

  const classes = useStyles()

  return (
    <>
      <Layout drawerView="login">
        <div className={classes.root}>
          <Container className={classes.container} maxWidth="sm">
            <Typography color="textPrimary" variant="h4">
              Password protected site
            </Typography>
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
      </Layout>
    </>
  )
}

export default LoginPage
