import {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

import { AuthProvider } from "../context/AuthContext";

import Signup from "./Signup";
import Dashboard from "../components/Placeholder";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Content from "../components/Content";
import Quotes from "./QuoteDisplay";
import Navbar from "../components/NavBar";
import Bookmarks from "../components/Bookmarks";


function App() {
  const [bookmark, setBookmark] = useState([])

  useEffect(() => {
      //setBookmark(localStorage.getItem('bookmarks'))
      const storage = JSON.parse(localStorage.getItem('bookmarks') || []);
      console.log(localStorage.getItem('bookmarks').length, storage);
      setBookmark(storage)
      
    
  }, [])

  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
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
            <Route path="/quotes">
              <Quotes bookmark={bookmark} setBookmark={setBookmark} />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks bookmark={bookmark} setBookmark={setBookmark} />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
