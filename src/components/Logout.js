import React from "react";
import { googleLogout } from "@react-oauth/google";
import "./Log.css"
import { Button } from "react-bootstrap";

function Logout({ setUser, clientId }) {
    const onClick = () => {

        if (window.confirm("Are you sure you want to sign out?")) {
            googleLogout();
            setUser(null);
            localStorage.setItem("login", null);
            console.log("Logout made successfully");
        } 

    };

    return (
        <div>
            <Button
                className="logoutLink bg-light border-0"
                onClick={onClick}>
                </Button>
        </div>
    );
}

export default Logout;