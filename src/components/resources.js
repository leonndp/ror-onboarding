import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Icon,
  MobileStepper,
  Paper,
  Tabs,
  Tab,
  TextField,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"

import ItemBox from "./ItemBox"
import Layout from "./layout"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    flexGrow: 1,
  },
  container: {
    margin: "3rem auto",
  },
  image: {
    marginBottom: "1rem",
  },
}))

const ResourcesPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h4" color="textPrimary">
            Download ROR Resources
          </Typography>
          <Box py={7}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <ItemBox>
                  <Typography variant="h5" color="textPrimary" style={{ fontWeight: 700 }}>
                    Presentation
                  </Typography>
                  <Box py={3}>
                    <Typography color="textPrimary">
                      Download and view the PowerPoint presentation
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href="https://rorpartners.com/docs/ror_crunch_pitchdeck.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </Button>
                </ItemBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ItemBox>
                  <Typography variant="h5" color="textPrimary" style={{ fontWeight: 700 }}>
                    Org Chart
                  </Typography>
                  <Box py={3}>
                    <Typography color="textPrimary">
                      Download and view the Crunch team Org chart
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href="https://rorpartners.com/docs/ror_org_chart.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </Button>
                </ItemBox>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default ResourcesPage
