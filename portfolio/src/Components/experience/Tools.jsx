import React from "react"
import "./skills.css"
import { ImHtmlFive } from "react-icons/im"
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io"
import { SiBootstrap, SiExpress, SiJavascript, SiMongodb, SiPostgresql, SiReact, SiRedux, SiSass, SiTypescript } from "react-icons/si"
import { FaGithubSquare } from "react-icons/fa"

const Tools = () => {
  return (
    <div class="interests">
      {/* <div class="section-title">
        <h2>Skills</h2>
      </div> */}

      <div class="skil_list">
        <div class="icon-box">
          <ImHtmlFive style={{ color: "#ffbb2c" }} />
          {/* <i class="ri-store-line" style={{ color: "#ffbb2c" }}></i> */}
          <h3>HTML</h3>
        </div>

        <div class="icon-box">
          <IoLogoCss3 style={{ color: "#5578ff" }} />
          <h3>CSS</h3>
        </div>

        <div class="icon-box">
          <SiSass style={{ color: " #ffa76e" }} />

          <h3>SASS</h3>
        </div>

        <div class="icon-box">
          <SiJavascript />
          <h3>JAVASCRIPT</h3>
        </div>

        <div class="icon-box">
          <SiTypescript style={{ color: "#e361ff" }} />

          <h3>TYPESCRIPT</h3>
        </div>

        <div class="icon-box">
          <SiBootstrap style={{ color: " #47aeff" }} />

          <h3>BOOTSTRAP</h3>
        </div>

        <div class="icon-box">
          <SiReact style={{ color: " #1189eb" }} />

          <h3>REACT</h3>
        </div>

        <div class="icon-box">
          <SiRedux style={{ color: "##11dbcf;" }} />

          <h3>REDUX</h3>
        </div>

        <div class="icon-box">
          <IoLogoNodejs style={{ color: "##4233ff;" }} />

          <h3>NODE.JS</h3>
        </div>

        <div class="icon-box">
          <SiExpress style={{ color: "#b2904f" }} />

          <h3>EXPRESS</h3>
        </div>

        <div class="icon-box">
          <SiMongodb style={{ color: "#b20969" }} />

          <h3>MONGODB</h3>
        </div>

        <div class="icon-box">
          <SiPostgresql style={{ color: "#ff5828" }} />

          <h3>POSTGRESQL</h3>
        </div>

        <div class="icon-box">
          <FaGithubSquare style={{ color: "#29cc61" }} />

          <h3>GITHUB</h3>
        </div>
      </div>
    </div>
  )
}

export default Tools
