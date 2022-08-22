import React from "react"
import Projectss from "./Projectss"
import "./skills.css"
import Tools from "./Tools"

const Skills = () => {
  return (
    <section id="skills">
      <h5>Get to Know</h5>
      <h2>Skills and Projects</h2>
      <div className="container">
        <Tools />
        <Projectss />
      </div>
    </section>
  )
}

export default Skills
