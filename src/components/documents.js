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

const DocumentsPage = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Box textAlign="center">
            <Typography variant="h4" color="textPrimary">
              Download ROR Agreements
            </Typography>
            <Box py={7}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ItemBox>
                    <Typography variant="h5" color="textPrimary">
                      MSA
                    </Typography>
                    <Box py={3}>
                      <Typography color="textPrimary">
                        An agreement regarding the terms that will govern future
                        transactions or future agreement
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
                <Grid item xs={12} sm={6} md={4}>
                  <ItemBox>
                    <Typography variant="h5" color="textPrimary">
                      MSA
                    </Typography>
                    <Box py={3}>
                      <Typography color="textPrimary">
                        An agreement regarding the terms that will govern future
                        transactions or future agreement
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
                <Grid item xs={12} sm={6} md={4}>
                  <ItemBox>
                    <Typography variant="h5" color="textPrimary">
                      MSA
                    </Typography>
                    <Box py={3}>
                      <Typography color="textPrimary">
                        An agreement regarding the terms that will govern future
                        transactions or future agreement
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
            <Typography color="textPrimary">
              Download, sign, and send completed documents to{" "}
              <Box component="span" fontWeight="700">
                crunch@rorpartners.com
              </Box>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default DocumentsPage