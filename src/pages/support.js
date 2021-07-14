import React, { useState, useEffect } from "react"
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

import ProfileCard from "./../components/ProfileCard"
import Layout from "./../components/Layout"

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

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab)
  }

  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Box textAlign="center">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Account Team" />
              <Tab label="Media & Analytics" />
              <Tab label="Data Integration" />
            </Tabs>
            <Box py={5}>
              <Button color="primary" size="large" variant="contained">
                Contact Support
              </Button>
            </Box>
            <Box hidden={activeTab !== 0}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard>
                    <StaticImage
                      className={classes.image}
                      src={"./../images/avatar.png"}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard>
                    <StaticImage
                      className={classes.image}
                      src={"./../images/avatar.png"}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard>
                    <StaticImage
                      className={classes.image}
                      src={"./../images/avatar.png"}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
            <Box hidden={activeTab !== 1}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard>
                    <StaticImage
                      className={classes.image}
                      src={"./../images/avatar.png"}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard>
                    <StaticImage
                      className={classes.image}
                      src={"./../images/avatar.png"}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
            <Box hidden={activeTab !== 2}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard>
                    <StaticImage
                      className={classes.image}
                      src={"./../images/avatar.png"}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </Layout>
  )
}

export default SupportPage
