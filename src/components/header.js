import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useState = makeStyles(theme => ({
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
  const classes = useState()

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.toolbar}>
        <StaticImage src="./../images/ror_logo-color.png" />
        <IconButton color="primary" size="large">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
