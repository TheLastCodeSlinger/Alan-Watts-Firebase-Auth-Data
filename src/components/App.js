import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import { AuthProvider } from "../context/AuthContext";

import Signup from "./Signup";
import Dashboard from "./Placeholder";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Content from "./Content";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/content">
              <Content />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
