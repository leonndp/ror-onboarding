/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Drawer from "./Drawer"
import Header from "./header"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
  },
}))

const Layout = ({ children, drawerView = "user" }) => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Drawer drawerView={drawerView} />
        {children}
      </div>
    </>
  )
}

export default Layout
