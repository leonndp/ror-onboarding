import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/PrivateRoute"

import Login from "../components/login"
import Dashboard from "../components/dashboard"
import Support from "../components/support"
import Documents from "../components/documents"
import Resources from "../components/resources"

const App = () => (
  <Layout>
    <Router basepath="app">
      <Login path="/login" />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/documents" component={Documents} />
      <PrivateRoute path="/support" component={Support} />
      <PrivateRoute path="/resources" component={Resources} />
    </Router>
  </Layout>
)

export default App
