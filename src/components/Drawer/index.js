import React from "react"

import LoginDrawer from "./LoginDrawer"
import UserDrawer from "./UserDrawer"

const Drawer = ({ drawerView = "user" }) => {
  return drawerView === "user" ? <UserDrawer /> : <LoginDrawer />
}

export default Drawer
