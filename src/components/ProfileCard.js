import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ItemBox from "./ItemBox"

const useStyles = makeStyles(theme => ({
  image: {
    marginBottom: "1rem",
  },
}))

const ProfileCard = ({
  children,
  name = "Lorem Ipsum",
  description = "Dolor sit amet",
}) => {
  const classes = useStyles()

  return (
    <ItemBox>
      <Box className={classes.image}>{children}</Box>
      <Typography color="textPrimary">
        <Box component="span" fontWeight={700}>
          {name}
        </Box>
        <br />
        {description}
      </Typography>
    </ItemBox>
  )
}

export default ProfileCard
