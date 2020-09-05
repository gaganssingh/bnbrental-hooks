import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import openModal from "../../actions/openModal";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import logoutAction from "../../actions/logoutAction";
import "./NavBar.css";

const NavBar = (props) => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.email);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        dispatch(openModal("closed", ""));
    }, [token]);

    // Change background color of NavBar depending
    // on the page user is visiting
    let navColor = "transparent";
    if (props.location.pathname !== "/") {
        navColor = "black";
    }

    return (
        <div className="container-fluid nav">
            <div className="row">
                <nav className={navColor}>
                    <div className="nav-wrapper">
                        <Link to="/" className="left">
                            airbnb
                        </Link>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link to="/">English (US)</Link>
                            </li>
                            <li>
                                <Link to="/">$ USD</Link>
                            </li>
                            <li>
                                <Link to="/">Become a host</Link>
                            </li>

                            {email ? (
                                <>
                                    <li className="login-signup">
                                        <Link to="/account">Hey, {email}</Link>
                                    </li>
                                    <li
                                        className="login-signup"
                                        onClick={() => dispatch(logoutAction())}
                                    >
                                        Logout
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li
                                        className="login-signup"
                                        onClick={() =>
                                            dispatch(
                                                openModal("open", <SignUp />)
                                            )
                                        }
                                    >
                                        Sign up
                                    </li>
                                    {/* prettier-ignore */}
                                    <li
                                            className="login-signup"
                                            onClick={() => dispatch(openModal("open", <Login />))}>
                                            Log in
                                        </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
