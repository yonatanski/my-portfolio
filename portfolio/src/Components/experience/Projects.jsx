import React from "react"
import "./project.css"
import { BsFileCodeFill } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import one from "../../assets/portfolio/portfolio-1.png"
import two from "../../assets/portfolio/portfolio-2.jpg"
import three from "../../assets/portfolio/portfolio-3.jpg"
import four from "../../assets/portfolio/portfolio-4.jpg"
import five from "../../assets/portfolio/portfolio-5.jpg"
import six from "../../assets/portfolio/portfolio-6.jpg"
import seven from "../../assets/portfolio/portfolio-7.jpg"

const Projects = () => {
  return (
    <div className="container portfolio">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      {/* <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div> */}
      <div className="portfolio-box">
        <div className="row portfolio-container">
          <div className="portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={one} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>E-commerce Website</h4>
                <p>Build with MERN stack techngologies</p>
                <div className="portfolio-links">
                  <a href="https://github.com/yonatanski/solo-captone_front-end/tree/main/capstone_app-fe" target="_blank" rel="noreferrer" className="portfolio-lightbox" title="Source Code">
                    <BsFileCodeFill />
                  </a>
                  <a href="https://solo-captone-front-end.vercel.app/" target="_blank" rel="noreferrer" className="portfolio-details-lightbox" title="Demo">
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
