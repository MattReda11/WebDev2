import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles.css";

function Contact() {
    return (
        <div>
            <div>
                <h1>What's Your Story?</h1>
            </div>
            <div className="location">
                <LocationOnIcon color="primary" fontSize="large" sx={{ fontSize: "80px" }} />
                <p>Montreal, Quebec</p>
            </div>
            <div className="icons">
                <div>
                    <a href="mailto:info@joeyredamusic.com" title="Email Me" >
                        <MailIcon color="primary" fontSize="large" sx={{ fontSize: "80px" }} />
                    </a>
                    <p>info@joeyredamusic.com</p>
                </div>
                <div>
                    <a href="https://www.instagram.com/joeyredamusic/" title="Instagram" >
                        <InstagramIcon color="primary" fontSize="large" sx={{ fontSize: "80px" }} />
                    </a>
                    <p>Visit My Instagram</p>
                </div>
                <div>
                    <a href="https://www.imdb.com/name/nm10212258/?ref_=fn_al_nm_1" title="IMDB" >
                        <AccountCircleIcon color="primary" fontSize="large" sx={{ fontSize: "80px" }} />
                    </a>
                    <p>Visit My IMDB Page</p>
                </div>
                <div>
                    <a href="https://www.youtube.com/@joeyredamusic/videos" title="Youtube" >
                        <YouTubeIcon color="primary" fontSize="large" sx={{ fontSize: "80px" }} />
                    </a>
                    <p>Visit My YouTube Channel</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;