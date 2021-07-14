import React from "react"

import {
  Box,
  Button,
  Container,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 300,
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 300,
    backgroundColor: "#3C456B",
    borderRight: "10px solid #5163AD",
  },
  container: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    color: "white",
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
        <List>
          <StaticImage src="../../images/ror_logo.png" />
          <ListItem button>
            <ListItemText primary="Support Team" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Documents" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Resources" />
          </ListItem>
        </List>
        <Button color="primary" variant="contained" size="large">
          Schedule an Appointment
        </Button>
      </Container>
    </MuiDrawer>
  )
}

export default Drawer
