import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

import MobileDrawer from "./Drawer/MobileDrawer"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

const Header = () => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  return (
    <>
      <MobileDrawer open={open} onClose={e => setOpen(false)} />
      <AppBar className={classes.root} position="fixed">
        <Toolbar className={classes.toolbar}>
          <StaticImage src="./../images/ror_logo-color.png" />
          <IconButton color="primary" size="large" onClick={e => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
