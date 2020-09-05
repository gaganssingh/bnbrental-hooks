import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import NavBar from "./utility/NavBar/NavBar";
// import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
// import Modal from "./utility/Modal/Modal";
// import CityVenues from "./pages/CityVenues/CityVenues";
// import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
// import Account from "./pages/Account/Account";
// import Search from "./pages/Search/Search";
import Spinner from "./utility/Spinner/Spinner";
import "./App.css";

// LAZY LOADED COMPONENTS
const Home = lazy(() => import("./pages/Home/Home"));
const NavBar = lazy(() => import("./utility/NavBar/NavBar"));
const SingleFullVenue = lazy(() =>
    import("./pages/SingleFullVenue/SingleFullVenue")
);
const Modal = lazy(() => import("./utility/Modal/Modal"));
const CityVenues = lazy(() => import("./pages/CityVenues/CityVenues"));
const PaymentSuccess = lazy(() =>
    import("./pages/PaymentSuccess/PaymentSuccess")
);
const Account = lazy(() => import("./pages/Account/Account"));
const Search = lazy(() => import("./pages/Search/Search"));

class App extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={Spinner}>
                    <Route path="/" component={NavBar} />
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/venue/:vid"
                        component={SingleFullVenue}
                    />
                    <Route
                        exact
                        path="/city/:cityName"
                        component={CityVenues}
                    />
                    <Route
                        exact
                        path="/payment-success/:stripeToken"
                        component={PaymentSuccess}
                    />
                    <Route path="/account" component={Account} />
                    <Route path="/search/:searchTerm" component={Search} />
                    <Route path="/" component={Modal} />
                </Suspense>
            </Router>
        );
    }
}

export default App;
