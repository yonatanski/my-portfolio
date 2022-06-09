import React, { useState } from "react"
import { BiShareAlt } from "react-icons/bi"
import { BsLinkedin, BsTwitter } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiOutlineLocationMarker } from "react-icons/hi"
import "./contact.css"
import { FiPhoneCall } from "react-icons/fi"
import { useRef } from "react"
import emailjs from "emailjs-com"

const Contact = () => {
  const [tnx, setTnx] = useState(false)
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_g9wuhxo", "template_lxrgnaa", form.current, "ucoRDEDbEKtgaXfaq").then(
      (result) => {
        console.log(result.text)
        if (result.text === "OK") {
          setTnx(true)
        }
      },
      (error) => {
        console.log(error.text)
      }
    )

    e.target.reset()
  }

  return (
    <section id="contact" className="">
      <h5>Get to Know</h5>
      <h2>Contact</h2>
      <div className="container contact">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="main-wrapper mt-2">
          <div className="contact-box ">
            <div className="info-box">
              <HiOutlineLocationMarker className="contact-icon" />
              <div className="detai">
                <h3>My Address</h3>
                <p>Torun,Poland</p>
              </div>
            </div>
          </div>

          <div className="contact-box d-flex align-items-stretch">
            <div className="info-box">
              <BiShareAlt className="contact-icon" />
              <div className="detai">
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="https://twitter.com/yonatan_gosaye" target="_blank" rel="noreferrer" className="twitter">
                    <BsTwitter />
                  </a>

                  <a href="https://github.com/yonatanski" target="_blank" rel="noreferrer" className="instagram">
                    <FaGithubSquare />
                  </a>

                  <a href="https://www.linkedin.com/in/yonathanski" target="_blank" rel="noreferrer" className="linkedin">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-box d-flex align-items-stretch">
            <div className="info-box">
              <MdEmail className="contact-icon" />
              <div className="detai">
                <h3>Email Me</h3>
                <a href="mailto:yonatanderibe6@gmail.com">
                  {" "}
                  <p>yonatanderibe6@gmail.com</p>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-box d-flex align-items-stretch">
            <div className="info-box">
              <FiPhoneCall className="contact-icon" />
              <div className="detai">
                <h3>Call Me</h3>

                <a href="tel:+48 579 298 192">
                  <p>+48 579 298 192</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form action="forms/contact.php" method="post" onSubmit={sendEmail} ref={form} className="php-email-form mt-4">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          {/* <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div> */}
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
          {tnx && <p>Message sent!! Thank you i will reply ASAP!</p>}
        </form>
        <div className="empty">fcgxdfchgxdxfxdx</div>
      </div>
    </section>
  )
}

export default Contact
