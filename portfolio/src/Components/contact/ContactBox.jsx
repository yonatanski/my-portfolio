import React from "react"


const ContactBox = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto: dummyegator@gmail.com"> Sendamessage </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action=""></form>
      </div>
    </section>
  )
}

export default ContactBox
