import React, {useState} from "react";
import emailjs from "emailjs-com";

const Contact = () => {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gfg2n4i', 'portfolio_template', e.target, 'user_ToJwfegMzrYofM5ihWgMX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        setMessage(true);
        e.target.reset();
    }

    return(
        <>
            <div className="contact-body" id="contact-me">
                <div className="container form-container">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 form-boundary">
                        <h2>Contact Me</h2>
                            <form onSubmit={handleSubmit}>
                                <input className="col-md-8" type="text" name="name" placeholder="Your name" />
                                <input className="col-md-10" type="email" name="email" required placeholder="Your Email Here"/>
                                <input className="col-md-8" type="text" name="subject" placeholder="Subject" />
                                <textarea className="col-md-10" type="text" name="msg" required placeholder= "How can I help you?" rows="5"/>
                                <input type="submit"className="form-btn" value="Send"></input><br/>
                                {message && <span className="form-msg">Thank you, I will reply ASAP!</span>}
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;