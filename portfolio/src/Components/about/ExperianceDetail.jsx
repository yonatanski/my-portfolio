import React from "react"
import "./inside.css"

const ExperianceDetail = () => {
  return (
    // <div class="container resume">
    <div class="row resume">
      <h3 class="resume-title">Work experience</h3>
      <div class="resume-item">
        <h4>EPICODE (STRIVE SCHOOL)| Tutor-VOLUNTEER</h4>

        <p>
          <small>European Intensive Bootcamp for STEM talents,Backed by Ycombinator</small>
        </p>
        <h5>Online | Feb 2022 – May-2022</h5>

        <ul>
          <li>Helping Lower batches when they faced the problem</li>
          <li>Fixing code bugs on virtual meetings on a shared screen</li>
          <li>Guiding students on how to do their projects</li>
        </ul>
      </div>
      <div class="resume-item">
        <h4>Reconext| Electronics Quality Tester</h4>

        <p>
          <small>a dedicated company to continuous improvement and innovation in repair electronics devices </small>
        </p>
        <h5>Bydgoszcz,Poland | Apr 2021 – Sep 2021</h5>
        {/* <p class="resume-detail">I was in Charge of Testing the final Product before sent to Production, Refurbishing Electronic Devices, Installing New software for refurbished electronic Devices</p> */}
        <ul>
          <li>I was in Charge of Testing the final Product before sent to Production</li>
          <li>Refurbishing Electronic Devices</li>
          <li>Installing New software for refurbished electronic Devices</li>
        </ul>
      </div>
      {/* <div class="col-lg-6">
         <h3 class="resume-title">Professional Experience</h3>
         <div class="resume-item">
           <h4>Senior graphic design specialist</h4>
           <h5>2019 - Present</h5>
           <p>
             <em>Experion, New York, NY </em>
           </p>
           <p>
             <ul>
               <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
               <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
               <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
               <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
             </ul>
           </p>
         </div>
         <div class="resume-item">
           <h4>Graphic design specialist</h4>
           <h5>2017 - 2018</h5>
           <p>
             <em>Stepping Stone Advertising, New York, NY</em>
           </p>
           <p>
             <ul>
               <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
               <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
               <li>Recommended and consulted with clients on the most appropriate graphic design</li>
               <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
             </ul>
           </p>
         </div>
       </div> */}
    </div>
  )
}

export default ExperianceDetail
