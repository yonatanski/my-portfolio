import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import { AiTwotoneMail } from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yonathanski" target="_blank" rel="noreferrer">
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com/yonatanski" target="_blank" rel="noreferrer">
        {" "}
        <FaGithubSquare />
      </a>
      <a href="mailto:yonatanderibe6@gmail.com" target="_blank" rel="noreferrer">
        <AiTwotoneMail />
      </a>
    </div>
  )
}

export default HeaderSocials
