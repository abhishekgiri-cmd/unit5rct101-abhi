import React from "react";
import "./Navbar.css"

export const Logo = () => {
    return (
        <div className="nav">
            <div className="logo">
                <p><a href="#">LOGOBAKERY</a></p>
            </div>

            <div className="link">
                <p><a href="#">Services</a></p>
                <p><a href="#">Projects</a></p>
                <p><a href="#">About</a></p>
            </div>
            <div className="btn">
                <p><a href="#">contact</a></p>


            </div>

        </div>


    )
}
