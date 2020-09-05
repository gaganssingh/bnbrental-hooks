import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import openModal from "../../actions/openModal";
import SignUp from "../SignUp/SignUp";
import regAction from "../../actions/regAction";
import "./Login.css";
import { useDispatch } from "react-redux";

const Login = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e) => setEmail(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);

    const submitLogin = async (e) => {
        e.preventDefault();
        const loginUser = {
            email,
            password,
        };
        const url = `${process.env.REACT_APP_API_URL}/users/login`;
        const response = await axios.post(url, loginUser);

        if (response.data.msg === "loggedIn") {
            swal({
                title: "Login successfull",
                text: "You have successfully logged in",
                icon: "success",
            });
            dispatch(regAction(response.data));
        } else if (response.data.msg === "badPass") {
            swal({
                title: "Login failed",
                text: "Invalid email or password. Please try again.",
                icon: "error",
            });
        } else if (response.data.msg === "noEmail") {
            swal({
                title: "Login failed",
                text: "A user with that email address does not exist",
                icon: "error",
            });
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={submitLogin}>
                <button className="facebook-login">
                    Connect With Facebook
                </button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                <input
                    type="email"
                    className="browser-default"
                    placeholder="Email address"
                    onChange={changeEmail}
                />
                <input
                    type="password"
                    className="browser-default"
                    placeholder="Password"
                    onChange={changePassword}
                />
                <button className="sign-up-button">Login</button>
                <div className="divider"></div>
                <div>
                    Don't have an account?{" "}
                    <span
                        className="pointer"
                        onClick={() => dispatch(openModal("open", <SignUp />))}
                    >
                        Sign up
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
