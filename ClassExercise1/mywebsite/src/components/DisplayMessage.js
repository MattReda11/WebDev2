import React from "react";
import "../styles.css";
import HomePageVid from "../assets/videos/HomePage.mp4";

function DisplayMessage() {
    return (
        <div className="home">
            <video src={HomePageVid} autoPlay loop muted />
        </div>
    );
}
export default DisplayMessage;
