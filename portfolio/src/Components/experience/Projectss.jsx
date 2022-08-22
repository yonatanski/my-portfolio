import React from "react"
import "./project.css"
import { BsFileCodeFill } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import one from "../../assets/portfolio/portfolio-1.png"
import two from "../../assets/portfolio/portfolio-2.png"
import three from "../../assets/portfolio/portfolio-3.JPG"
import four from "../../assets/portfolio/portfolio-4.jpg"
import five from "../../assets/portfolio/portfolio-5.jpg"
import six from "../../assets/portfolio/portfolio-6.jpg"
import seven from "../../assets/portfolio/portfolio-7.jpg"

const Projectss = () => {
  return (
    <div className=" projects-wrapper">
      <div className="portfolio-item">
        <img src={one} className="" alt="" />
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
      <div className="  portfolio-item">
        <img src={two} className="" alt="" />
        <div className="portfolio-info">
          <h4>Spotify Clone</h4>
          <p>React Spotify Clone</p>

          <div className="portfolio-links">
            <a href="https://github.com/yonatanski/spotify-clone_react" target="_blank" rel="noreferrer" className="portfolio-lightbox" title="Source Code">
              <BsFileCodeFill />
            </a>
            <a href="https://spotify-clone-react-snowy.vercel.app/" target="_blank" rel="noreferrer" className="portfolio-details-lightbox" title="Demo">
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-item text-dark">
        <img src={three} className="" alt="" />
        <div className="portfolio-info">
          <h4>Linkedin Clone</h4>
          <p>Fully functional Spotify Clone</p>
          <small>Frontend built with react,redux,bootstrap</small>
          <small>Backend built with api node-express,mongodb,jwt-athentication</small>
          <small classname="warrning">
            google chrome blocked this project url becuase its considerd like phising site so try to use diffrent browser when you use it! this is the clone of linkiden not the real one or built for phising attack. thank you
          </small>

          <div className="portfolio-links">
            <a href="https://github.com/FrancescoMicunco/linkedin-clone/tree/my-branch-yonatan" target="_blank" rel="noreferrer" className="portfolio-lightbox" title="Source Code">
              <BsFileCodeFill />
            </a>
            <a href="https://linkedin-react-clone-xi.vercel.app/" target="_blank" rel="noreferrer" className="portfolio-details-lightbox" title="Demo">
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projectss
