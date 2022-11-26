import React from "react";
import SpotifyEmbed from "../embeds/SpotifyEmbed";
import "../styles.css";

function Albums() {
    return (
        <div>
            <div>
                <h1>My Albums & Singles</h1>
            </div>
            <div className="discs">
                <div>
                    <SpotifyEmbed type="album" embedId="0otOjVMtA6DO8wmPa0kSAz" />
                </div>
                <div>
                    <SpotifyEmbed type="album" embedId="2YuFp114A88xDzPR0VIhEJ" />
                </div>
                <div>
                    <SpotifyEmbed type="album" embedId="3cgpNsdi159zyYXq8oKPfV" />
                </div>
                <div>
                    <SpotifyEmbed type="album" embedId="0GWFoiT26Dd3s0ABJ5kT3j" />
                </div>
                <div>
                    <SpotifyEmbed type="album" embedId="6EOJCTnOI6nCLSe9stfEEL" />
                </div>
                <div>
                    <SpotifyEmbed type="playlist" embedId="1fp4ZDdYdXPwhxgAU1SVCK" />
                </div>
            </div>
        </div>
    )
}

export default Albums;