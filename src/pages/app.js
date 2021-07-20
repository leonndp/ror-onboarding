import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/PrivateRoute"

import SignUp from "../components/signup"
import Dashboard from "../components/dashboard"
import Support from "../components/support"
import Documents from "../components/documents"
import Resources from "../components/resources"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/documents" component={Documents} />
      <PrivateRoute path="/app/support" component={Support} />
      <PrivateRoute path="/app/resources" component={Resources} />
    </Router>
  </Layout>
)

export default App
