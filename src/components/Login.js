import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "./Log.css"

function Login({ setUser }) {
    const onSuccess = (res) => {
        var tokenData = jwt_decode(res.credential);
        var loginData = {
            googleId: tokenData.sub,
            ...tokenData
        }
        setUser(loginData);
        localStorage.setItem("login", JSON.stringify(loginData));
        console.log("Login Success: currentUser:", loginData);
    };

    const onFailure = (res) => {
        console.log("Login failed: res:", res);
    }

    return (
        <div className="loginLink">
            <GoogleLogin
                id="login"
                buttenText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                shape="circle"
                type="icon"
                size="medium"
                isSignedIn={true}
                auto_select={true}
            />
        </div>
    );
}

export default Login;