import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "@material-ui/core"
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"

import Drawer from "./Drawer"
import Header from "./header"
import "./layout.css"

import theme from "./../theme"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#E5E5E5",
    width: "100%",
    "& div:nth-child(2)": {
      width: "100%",
    },
  },
}))

const Layout = ({ children, drawerView = "user" }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <>
        <Header />
        <div className={classes.root}>
          <Drawer drawerView={drawerView} />
          {children}
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
