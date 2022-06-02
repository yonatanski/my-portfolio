import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import CV from "../../assets/Yonatan-Deribe CV.pdf"

const CTA = () => {
  return (
    <div className="cta ms-2">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn  btn-primary">
        {" "}
        Let's Talk{" "}
      </a>
    </div>
  )
}

export default CTA
