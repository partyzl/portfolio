import React from "react";

const Contact = () => {
    return(
        <>
            <div className="contact-body" id="contact-me">
                <div className="container form-container">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 form-boundary">
                        <h2>Contact Me</h2>
                            <form>
                                <input className="col-md-10" type="email" placeholder="Your Email Here"/>
                                <input className="col-md-8" type="text" placeholder="Subject" />
                                <textarea className="col-md-10" type="text" placeholder= "How can I help you?" rows="5"/>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;