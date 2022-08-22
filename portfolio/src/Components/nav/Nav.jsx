import React, { useState } from "react"
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  console.log(activeNav)
  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="iconfomenu">
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
          <AiOutlineHome />
        </a>
        <span>Home</span>
      </div>
      <div className="iconfomenu">
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
          <AiOutlineUser />
        </a>
        <span>About</span>
      </div>
      <div className="iconfomenu">
        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}>
          <BiBook />
        </a>
        <span>Projects</span>
      </div>

      {/* <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a> */}
      <div className="iconfomenu">
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
          <BiMessageSquareDetail />
        </a>
        <span>Contact</span>
      </div>
    </nav>
  )
}

export default Nav
