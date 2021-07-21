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
              <Tab label="Account Team" style={{ fontWeight: 700 }} />
              <Tab label="Media & Analytics" style={{ fontWeight: 700 }} />
              <Tab label="Data Integration" style={{ fontWeight: 700 }} />
            </Tabs>

            <Box hidden={activeTab !== 0}>
              <Box py={5}>
                <Button
                  component="a"
                  href="mailto:crunch@rorpartners.com?subject=Crunch | Account Team Message"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Contact Us With Questions
                </Button>
              </Box>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Mike Carney"
                    description="SVP & Chief Client Officer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/mike-carney.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Kent Lehnhoff"
                    description="VP, Business Development"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/ken-lehnhoff.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
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
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Emily Royster"
                    description="Account Executive"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/emily-royster.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
              </Grid>
            </Box>
            <Box hidden={activeTab !== 1}>
              <Box py={5}>
                <Button
                  component="a"
                  href="mailto:crunch@rorpartners.com?subject=Crunch | Media Team Message"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Contact Us With Questions
                </Button>
              </Box>
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
                    name="Courtney Conroy"
                    description="VP, Digital Media"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/courtney-conroy.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Paul Reyes"
                    description="Director Social Media"
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
                    description="Director Digital Media"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/jeff-silva.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Rebecca Buscemi"
                    description="Sr. Digital Media Specialist, Social Media"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/rebecca-buscemi.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Lee Ann Benson"
                    description="Director of Analytics"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/lee-benson.png"}
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
              <Box py={5}>
                <Button
                  component="a"
                  href="mailto:crunch@rorpartners.com?subject=Crunch | Data Team Message"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Contact Us With Questions
                </Button>
              </Box>
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
                    name="Ryan Lapcevic"
                    description="Principal Engineer"
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
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Akhil Manchikanti"
                    description="Software Engineer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/akhil-manchikanti.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="John Hayes"
                    description="Software Engineer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/john-hayes.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Jennifer Schmidt"
                    description="IT Administrator"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/jennife-schmidt.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Andrew Studer"
                    description="Jr. Software Engineer"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/andre-studer.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard
                    name="Kaitlin Cooley"
                    description="Data Production Manager"
                  >
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/kaitli-cooley.png"}
                      width={100}
                    />
                  </ProfileCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ProfileCard name="Dom White" description="Data Specialist">
                    <StaticImage
                      className={classes.image}
                      src={"./../images/headshots/dom-white.png"}
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
