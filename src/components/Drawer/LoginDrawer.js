import React from "react"

import {
  Box,
  Container,
  Drawer as MuiDrawer,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  drawer: {
    width: "40%",
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    backgroundColor: "#3C456B",
    borderRight: "10px solid #5163AD",
    width: "40%",
  },
  container: {
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
}))

const Drawer = () => {
  const classes = useStyles()

  return (
    <MuiDrawer
      className={classes.drawer}
      PaperProps={{
        classes: {
          root: classes.drawerPaper,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Container className={classes.container} maxWidth="sm">
        <StaticImage src="../../images/ror_logo.png" layout="fixed" />
        <Box color="#fff">
          <StaticImage
            src="../../images/welcome.png"
            alt="Welcome"
            layout="fixed"
          />
          <Box clone py={2}>
            <Typography variant="h2">Crunch Team</Typography>
          </Box>
          <Typography>
            This is your on-boarding portal where you can access your agreement
            docs and have access to your support team
          </Typography>
        </Box>
      </Container>
    </MuiDrawer>
  )
}

export default Drawer
