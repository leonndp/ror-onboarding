import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useState = makeStyles(theme => ({
  root: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}))

const Header = () => {
  const classes = useState()

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <StaticImage src="./../images/ror_logo-color.png" />
      </Toolbar>
    </AppBar>
  )
}

export default Header
