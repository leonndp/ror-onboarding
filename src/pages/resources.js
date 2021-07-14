import React from "react"
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

import ItemBox from "./../components/ItemBox"
import Layout from "./../components/layout"

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
    <Layout>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h4" color="primary">
              Download ROR Agreements
            </Typography>
            <Box py={7}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <ItemBox>
                    <Typography variant="h5" color="primary">
                      Presentation
                    </Typography>
                    <Box py={3}>
                      <Typography color="primary">
                        Download and view the PowerPoint presentation
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      Download
                    </Button>
                  </ItemBox>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ItemBox>
                    <Typography variant="h5" color="primary">
                      Presentation
                    </Typography>
                    <Box py={3}>
                      <Typography color="primary">
                        Download and view the PowerPoint presentation
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      Download
                    </Button>
                  </ItemBox>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </Layout>
  )
}

export default ResourcesPage
