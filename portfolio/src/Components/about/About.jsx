import React from "react"
import "./about.css"
import me from "../../assets/me.jpg"
import EduDetail from "./EduDetail"
import { FaAward } from "react-icons/fa"
import { FiDivideSquare, FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import ExperianceDetail from "./ExperianceDetail"

const About = () => {
  return (
    <section id="about">
      <h5 className="gettonow">Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__mee">
          <div className="about__me-image">
            <img src={me} alt="my" />
          </div>
          <div className="detail">
            <p id="aboutmedetail">
              Full Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions.expiranced through 1000+ hours of coding bootcamp course,learning JavaScript,Node.Js,React.Js and the over all MERN stack
              technologies. Eager to change mockups to life as fully-functional applications and to tackle web development challenges to achieve lasting impacts on user experience.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <EduDetail />
              {/* <h5>Experience</h5>
              <small>1+ years Working</small> */}
            </div>
            <div className="about__card">
              <ExperianceDetail />
              {/* <h5>Experience</h5>
              <small>1+ years Working</small> */}
            </div>
            {/* <div className="about__card">
              <ExperianceDetail /> */}
            {/* <FiUsers className="about__icon" /> */}
            {/* <h5>Experience</h5>
              <small>1+ years Working</small> */}
            {/* </div> */}
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
