import React from "react";
import "../styles.css";
import profilePic3 from '../profilepic3.jpeg'
import profilePic2 from '../profilepic2.jpeg'

const styles = {
    hr: {
        width: "100%",
        color: "black"
    },
    profile: {
        width: 275,
        height: 275
    }
}

function About() {
    return (
        <div className="container">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="h2 px-3 mt-4 about">About Me
                <hr style={styles.hr}></hr>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4 px-3 mt-4">
                        <img src={profilePic3}className="img-thumbnail" style={styles.profile} alt="Profile Pic"></img>
                    </div>
                    <div className="col-md-8 mb-4">
                        <p className="card-text mt-5 font-weight-bold"><strong>Hello! My  name is Harrison Glover and I am DFW based full stack developer. I am a problem solver at heart, and enjoy the challenge of coming up with new and innovative ways to make this world we live in a better place.  My passion for learning and and helping others, along with my 9 year old son were the motiation that started me on my on my coding journey. We were having a conversation about him starting some coding classes and he expressed how he thought it would very difficult and he didn't know if he could do it or not.  I explained to him that if he has a burning desire to be successful then there is nothing that can stop him.  At that very moment I thought "I need to take my on advice!", and I have not looked back since.
                        I look forward to the next challenge.  Let's Connect. 
                        </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;