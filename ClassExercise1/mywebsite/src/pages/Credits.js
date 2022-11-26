import React from "react";
import Cycle from "../assets/images/cycle.jpg";
import Dogs from "../assets/images/dogs.jpg";
import Drought from "../assets/images/drought.jpg";
import Feodan from "../assets/images/feodan.jpg";
import Forest from "../assets/images/forest.jpg";
import Spring from "../assets/images/spring.png";

function Credits() {
    return (
        <div>
            <div className="title">
                <h2>Credits</h2>
            </div>
            <div className="credits">
                <div>
                    <a href="https://www.imdb.com/title/tt5629084/" title="View Movie Details"><img src={Dogs} alt="Cycle Poster" width="50%" /></a>
                    <p className="credit">2019 - As Composer</p>
                </div>
                <div>
                    <img src={Cycle} alt="Cycle Poster" width="50%" />
                    <p className="credit">2020 - As Composer</p>
                </div>
                <div>
                    <img src={Drought} alt="Drought Poster" width="50%" />
                    <p className="credit">2020 - As Composer</p>50
                </div>
                <div>
                    <img src={Forest} alt="Forest Poster" width="50%" />
                    <p className="credit">2021 - As Composer</p>
                </div>
                <div>
                    <a href="https://www.imdb.com/title/tt15819876/?ref_=nv_sr_srsg_0" title="View Movie Details">
                        <img src={Feodan} alt="Feodan Poster" width="50%" />
                    </a>
                    <p className="credit">2022 - As Composer</p>
                </div>
                <div>
                    <img src={Spring} alt="Spring Poster" width="50%" />6
                    <p className="credit">2022 - As Composer</p>
                </div>
            </div>
        </div >
    )
}

export default Credits;