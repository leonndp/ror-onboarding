import React from "react"

import LoginDrawer from "./LoginDrawer"
import UserDrawer from "./UserDrawer"
import { isLoggedIn } from "../../services/auth"

const Drawer = ({ drawerView = "user" }) => {
  return isLoggedIn() ? <UserDrawer /> : <LoginDrawer />
}

export default Drawer
