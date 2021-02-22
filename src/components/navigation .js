import React from "react";
import { Link, withRouter } from "react-router-dom";
import Resume from "../Harrison_Glover SMU Updated Resume 2020.docx (2).pdf";

  const styles = {
    nav: {
        color: "white"
    }
  }      


function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid overflow-auto">
                    <Link className="navbar-brand mr-5"style={styles.nav} to="#">Harrison L. Glover</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" style = {styles.nav} aria-current="page" to="/">About</Link>
                            </li>
                            <li  className="nav-item">
                                <Link className="nav-link active" style= {styles.nav} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active" to="/portfolio" id="navbarDropdown" style= {styles.nav} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </Link>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style= {styles.nav} href= {Resume}download>Resume</a>
                            </li>
                        </ul>
                        
                </div>
                </div>
            </nav>
        </div >


    )
}

export default withRouter(Navigation);