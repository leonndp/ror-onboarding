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

import ProfileCard from "./ProfileCard"
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

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab)
  }

  const classes = useStyles()

  return (
    <>
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
                  <ProfileCard
                    name="Jenn Galantini"
                    description="VP, Client Accounts"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/jenn-galantini.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Kari Wehler"
                    description="Sr. Account Manager"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/kari-wehler.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Stacy Carney"
                    description="Account Manager"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/stacy-carney.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
            <Box hidden={activeTab !== 1}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Tom Lanahan"
                    description="SVP & Chief Operating Officer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/tom-lanahan.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Paul Reyes"
                    description="Director, Social Media"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/paul-reyes.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Jeff Silva"
                    description="Director, Digital Media"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/jeff-silva.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard name="Melissa Simon" description="Paid Social">
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/melissa-simon.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Lee Ann Benson"
                    description="Directorof Analytics"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/lee-benson.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard name="Travis Cooper" description="Paid Search">
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/travis-cooper.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Tasha Celi"
                    description="Director, Email & CRM"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/tasha-celi.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Mary Jo Malooly"
                    description="Digital Display"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/mary-malooly.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Zach Luechauer"
                    description="Traditional & OOH Media Buyer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/zach-luechauer.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
            <Box hidden={activeTab !== 2}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Jamie Zapko"
                    description="SVP, Chief Data Officer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/jamie-zapko.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Ryan Lapcevic"
                    description="Principal Engineering"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/ryan-lapcevic.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Ursula Amato"
                    description="Web Operations Manager"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/ursula-amato.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default SupportPage
