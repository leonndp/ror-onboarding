import React from "react"

import { Box, Paper } from "@material-ui/core"

const ItemBox = ({ children }) => {
  return (
    <Paper>
      <Box padding={3} textAlign="center">
        {children}
      </Box>
    </Paper>
  )
}

export default ItemBox
