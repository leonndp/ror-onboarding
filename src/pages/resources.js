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
            <Typography variant="h4" color="textPrimary">
              Download ROR Agreements
            </Typography>
            <Box py={7}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <ItemBox>
                    <Typography variant="h5" color="textPrimary">
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
                      href="https://queup.s3.us-west-1.amazonaws.com/ror/documents/msa_sow_document.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Download
                    </Button>
                  </ItemBox>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ItemBox>
                    <Typography variant="h5" color="textPrimary">
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
                      href="https://queup.s3.us-west-1.amazonaws.com/ror/documents/msa_sow_document.pdf"
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
    </Layout>
  )
}

export default ResourcesPage
