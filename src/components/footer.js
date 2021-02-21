import React from "react";
import "../styles.css";

function Footer() {
    return (
        <footer id="footer">
            <nav className="nav justify">
                <a className="far fa-envelope text-white" id="mail" href="mailto: harrison_glover@yahoo.com">Email</a>
                <a className="fab fa-github text-white" href="https://github.com/Glove1911" id="github">Github</a>
                <a className="fab fa-linkedin text-white" href="https://www.linkedin.com/in/harrison-glover-80252998/"
                    id="linkedin">LinkedIn</a>

            </nav>
        </footer>
    )
}

export default Footer;