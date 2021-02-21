import React from "react";
import "../styles.css";
import weatherPic from "../weatherpic.jpeg";
import codePic from "../codepic.jpeg";
import gitFit from "../gitfitpic.jpeg";
import outdoor from "../landingPageScreenshot.png";
import schedule from "../schedulepic.jpeg";




const styles = {
    button20Style: {
        marginTop: 20

    },
    button40Style: {
        marginTop: 40
    },

    hr: {
        width: "100%",
        color: "black"
    }

}

function Portfolio() {
    return (
        // <body className="full-page-bacground-img">
            <div className="container">
                <div className="row h-100 align-items-center justify-content-center text-center">

                    <div className="h2 px-3 mt-4 about">Portfolio
                    <hr style={styles.hr}></hr>
                        <div id="carouselExampleIndicators" className="carousel slide align-self-center" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-50"
                                        src={weatherPic}
                                        alt="weather board screensot"></img>

                                    <a href="https://glove1911.github.io/Weather-Dashboard/">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Deployed Application</button>
                                    </a>

                                    <a href="https://github.com/Glove1911/Weather-Dashboard">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Github Repository</button>
                                    </a>

                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-50"
                                        src={gitFit}
                                        alt="git fit screentshot"></img>

                                    <a href="https://lkglass-smu.github.io/GitFit/">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Deployed Application</button>
                                    </a>
                                    <a href="https://github.com/LKglass-SMU/GitFit">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Github Repository</button>
                                    </a>


                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-50 justify-content-center"
                                        src={schedule}
                                        alt="Scheduler Screenshot"></img>

                                    <a href="https://glove1911.github.io/Work-Day-Scheduler/">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Deployed Application</button>
                                    </a>

                                    <a href="https://github.com/Glove1911/Work-Day-Scheduler">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Github Repository</button>
                                    </a>


                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-50"
                                        src={codePic}
                                        alt="Coding Quiz Screenshot"></img>

                                    <a href="https://glove1911.github.io/Code-Quiz-Assignment/">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button40Style}>Deployed Appication</button>
                                    </a>

                                    <a href="https://github.com/Glove1911/Code-Quiz-Assignment">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button40Style}>Github Repository</button>
                                    </a>



                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-50" src={outdoor}
                                        alt="Outdoor Adventures Screenshot"></img>
                                    <a href="https://smu-project-outdoor-adventures.herokuapp.com/">
                                        <button type="button" className="btn btn-outline-primary"
                                            style={styles.button20Style}>Deployed Application</button>
                                    </a>
                                    <a href="https://github.com/DJFriar/SMU-Project-02-Outdoor-Adventures">
                                        <button type="button" className="btn btn-outline-primary" style={styles.button20Style}>Github Repository</button>
                                    </a>

                                </div>
                            </div>
                            <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        // </body>
    )
}
export default Portfolio;