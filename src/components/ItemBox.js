import React from "react"

import { Box, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    padding: theme.spacing(5),
  },
}))

const ItemBox = ({ children }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Box
        margin="auto"
        height="100%"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {children}
      </Box>
    </Paper>
  )
}

export default ItemBox
