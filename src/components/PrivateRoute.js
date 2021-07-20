import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (
    !isLoggedIn() &&
    location.pathname !== `/login` &&
    location.pathname !== `/`
  ) {
    navigate("/login")
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute
