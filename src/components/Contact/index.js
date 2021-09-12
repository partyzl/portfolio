import React, {useState} from "react";

const Contact = () => {

    const [message, setMessage] = useState(false);

    const emptyForm = (e) => {
        e.target.email.value="";
        e.target.subject.value="";
        e.target.msg.value="";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        emptyForm();
    }

    return(
        <>
            <div className="contact-body" id="contact-me">
                <div className="container form-container">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 form-boundary">
                        <h2>Contact Me</h2>
                            <form onSubmit={handleSubmit}>
                                <input className="col-md-10" type="email" name="email" required placeholder="Your Email Here"/>
                                <input className="col-md-8" type="text" name="subject" placeholder="Subject" />
                                <textarea className="col-md-10" type="text" name="msg" required placeholder= "How can I help you?" rows="5"/>
                                <button type="submit"className="form-btn">Submit</button><br/>
                                {message && <span className="form-msg">Thank you, I will reply ASAP!</span>}
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;