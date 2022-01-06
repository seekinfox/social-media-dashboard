import React from "react";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import insta from "../images/icon-instagram.svg";
import yt from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const MainCards = (props) => {
    const data = [
        {
            id: 0,
            name: "@nathanf",
            followers: 1987,
            num: 12,
            img: fb, 
            arrow: up
        },
        {
            id: 1,
            name: "@nathanf",
            followers: 1044,
            num: 99,
            img: twitter,
            arrow: up 
        },
        {
            id: 2,
            name: "@realnathanf",
            followers: "11k",
            num: 144,
            img: insta,
            arrow: up
        },
        {
            id: 3,
            name: "Nathan F.",
            followers: 8239,
            num: 144,
            img: yt,
            arrow: down
        }
    ]

    return (
        <>
        <section className={`mainCards ${props.mode ? "darkmode" : ""}`}>

        {data.map( ({id, name, followers, num, img, arrow}) => 
            <div key={id} className="card">
                <div className="title">
                    <img src={img} alt={name} />
                    <p>{name}</p>
                </div>
                <p>{followers}</p>
                <p>followers</p>
                <div className="footer">
                    <img src={arrow} alt="arrow" />
                    <p>{`${num} today`}</p>
                </div>
            </div>
        )}

        </section>
        </>
    );
}
export default MainCards