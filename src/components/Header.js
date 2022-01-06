import React from "react";

const Header = (props) => {
    
    return(
        <>
        <header className={`header ${props.mode ? "darkmode" : ""} `}>
            <div className="title">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <div className="toggle">
                <p>Dark Mode</p>
                <div className={`button ${props.mode ? "modeOn2" : ""}`}
                onClick={props.toggle}
                >
                    <div className={`btnInner ${props.mode ? "modeOn" : ""}`}>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
export default Header