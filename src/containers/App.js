import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

import firebaseAxios from "../Firebase&Axios/FirebaseAxios";

import { useAuth } from "../context/AuthContext";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Content from "../components/Content";
import Quotes from "./QuoteDisplay";
import Navbar from "../components/NavBar";
import Bookmarks from "../components/Bookmarks";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const { currentUser } = useAuth();

  
  useEffect(() => {
    const fetchBookmarksFromServer = async () => {
      const result = await firebaseAxios.get(`user-${currentUser.uid}.json`);
      if (result.data) {
        setBookmark(JSON.parse(result.data.bookmarks));
      }
    };
    if (currentUser) {
      fetchBookmarksFromServer();
    }
  }, [currentUser]);

  console.log(currentUser, bookmark);
  return (
      <Router>
        <Navbar setBookmark={setBookmark} />
        <Switch>
          <Route path="/" exact>
            <Content />
          </Route>
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
          {!currentUser && <PrivateRoute path="/" component={Bookmarks} />}
          <Route path="/bookmarks">
            <Bookmarks bookmark={bookmark} setBookmark={setBookmark} />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
