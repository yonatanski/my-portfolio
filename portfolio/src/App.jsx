import React from "react"
import "./App.css"
import About from "./Components/about/About"
import Contact from "./Components/contact/Contact"
import Experience from "./Components/experience/Experience"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Nav from "./Components/nav/Nav"
import Portfolio from "./Components/portfolio/Portfolio"
import Service from "./Components/service/Service"
import Testimonials from "./Components/testimonials/Testimonials"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
