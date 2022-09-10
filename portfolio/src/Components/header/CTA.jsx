import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

import CV from "../../assets/Yonatan-Deribe CV.pdf"

const CTA = () => {
  return (
    <div className="cta ms-2">
      {/* https://drive.google.com/uc?export=download&id=1NjKjkENcNcsK1u4lMb4rR5HoAOc7A92x */}
      <a href="https://drive.google.com/file/d/1IJ2soRwJUWHCRSzCNvbSrzQNU3EANpZY/view?usp=sharing" download className="btn" target="_blank" rel="noreferrer">
        Open CV
      </a>

      <a href="#contact" className="btn  btn-primary">
        {" "}
        Let's Talk{" "}
      </a>
    </div>
  )
}

export default CTA
