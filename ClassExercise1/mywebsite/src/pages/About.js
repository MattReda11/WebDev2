import React from "react";
import YoutubeEmbed from "../embeds/YoutubeEmbed";

function About() {
    return (
        <div className="about">
            <div className="content">
                <h1>About Me</h1>
                <p>
                    I love working with filmmakers. They create fascinating stories that inspire me and set guidelines for my compositions. Time and again they push me to write differently and create music which I would never conceive without picture. I thrive to equally inspire filmmakers with my work.
                </p>
                <p>
                    It is truly amazing how music can completely change a scene and influence a viewer’s perspective. It can highlight a character’s point of view or transport the viewers to a whole new world. As a composer I know that with this great power comes great responsibility so my goal is always to support the picture and enhance your story.
                </p>
            </div>
            <div className="short">
                <YoutubeEmbed embedId="s5IqZujFPe4" />
            </div>
        </div>
    );
}
export default About;