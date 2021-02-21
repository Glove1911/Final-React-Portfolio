import React from "react";
import "../styles.css";

const styles = {
    hr: {
        width: "100%",
        color: "black"
    },
    contact: {
        color: "black"
    }
}


function Contact() {
    return(
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="h2 px-3 about mt-4" styl={styles.contact} id="contact">Contact
            <hr style={styles.hr}></hr>
            <form>
              <div className="form-group ml-4 mr-4">
                <label  className="contact-text">Name</label>
                <input type="text" className="form-control" id="Name" placeholder="Name"></input>
              </div>
              <div className="form-group ml-4 mr-4">
                <label  className="contact-text">Email</label>
                <input type="text" className="form-control" id="Email" placeholder="Email"></input>
              </div>
              <div className="form-group ml-4 mr-4">
                <label  className="contact-text">Message</label>
                <textarea className="form-control" id="Message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
          
        
      </div>
    </div>
    )
}
    export default Contact;