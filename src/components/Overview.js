import React from "react";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import insta from "../images/icon-instagram.svg";
import yt from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const Overview = (props) => {
    const data = [
        {
            id: 0,
            name: "Page Views",
            num: 87,
            img: fb, 
            arrow: up,
            perc: 3
        },
        {
            id: 1,
            name: "Likes",
            num: 52,
            img: fb,
            arrow: down,
            perc: 2
        },
        {
            id: 2,
            name: "Likes",
            num: 5462,
            img: insta,
            arrow: up,
            perc: 3
        },
        {
            id: 3,
            name: "profile View",
            num: '52K',
            img: insta,
            arrow: up,
            perc: 2257
        },
        {
            id: 4,
            name: "Retweets",
            num: 117,
            img: twitter,
            arrow: up,
            perc: 1375
        },
        {
            id: 5,
            name: "Likes",
            num: 507,
            img: twitter,
            arrow: up,
            perc: 303
        },
        {
            id: 6,
            name: "Likes",
            num: 107,
            img: yt,
            arrow: down,
            perc: 19
        },
        {
            id: 7,
            name: "Total View",
            num: 1407,
            img: yt,
            arrow: down,
            perc: 12
        }
    ]

    return (
        <>
        <section className={`oCards ${props.mode ? "darkmode" : ""}`}>
            <h2>Overview - Today</h2>
        <div className="cards">    
        {data.map( ({id, name, num, img, arrow, perc}) => 
            <div key={id} className="card">
                <div className="one">
                    <p>{name}</p>
                    <p>{num}</p>
                </div>
                <div className="two">
                    <img src={img} alt={name} />
                    <p className={`${arrow === up ? 'green' : 'red'}`}>
                    <img src={arrow} alt="arrow"/>{`${perc}%`}
                    </p>
                </div>
            </div>
        )}
        </div>
        </section>
        </>
    );
}
export default Overview