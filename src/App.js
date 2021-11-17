import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { history } from "./helpers/history";
import { PrivateRoute } from "./routing/PrivateRouter";
import HomePage from "./views/HomePage";
import Specialty from "./components/Specialty/Specialty";
import Header from "./components/Layout/Header";
import FooterPage from "./components/Footer/Footer";
import PreviousBookingsPage from "./components/PreviousBookings/PreviousBookingsPage";
import DoctorLandingPage from "./components/Doctor/DoctorLandingPage";
import Checkout from "./components/Checkout/Checkout";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import PrescriptionNew from "./components/Doctor/PrescriptionV2";
import ProfilePage from "./components/profile-page/ProfilePage";
function App() {
  const { isAuthenticated, currentUser } = useSelector((state) =>
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : state.auth
  );

  return (
    <Router history={history}>
      <Header />
      <div className="appBody">
        <Switch>
          <Route
            exact
            path="/"
            component={
              currentUser && currentUser.role == "doctor"
                ? DoctorLandingPage
                : HomePage
            }
          />
          {/* <PrivateRoute exact path="/" component={HomePage} /> */}
          <Route path="/speciality/:specialityId" component={Specialty} />
          <Route
            path="/previousbookings/:filter"
            component={PreviousBookingsPage}
          />
          <Route path="/prescriptions" component={PrescriptionNew} />

          <Route path="/checkout" component={Checkout} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
      <FooterPage />
    </Router>
  );
}
export default App;
