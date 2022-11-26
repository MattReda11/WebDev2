import React from "react";
import PropTypes from "prop-types";

const SpotifyEmbed = ({ embedId, type }) => {
    return (<div className="spotify">
        <iframe
            src={`https://open.spotify.com/embed/${type}/${embedId}?utm_source=generator`}
            width="80%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Album"
        />
    </div>
    );
}

SpotifyEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default SpotifyEmbed