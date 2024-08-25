import "./App.css"
import { useState } from 'react'
//import phone from "."
//import mail from "."
//import location from ""
//import Kaleb from ""

import Experience from "./components/experience";
import Project from "./components/project"
import { technical_skills, soft_skills, projects, jobs } from "./data"

function App() {
  const [bioButtonText, setBioButtonText] = useState('Need a developer?')
  function handleBioButtonMouseEnter() {
    setTimeout(() => setBioButtonText('Get in touch!'), 200)
  }

  function handleBioButtonMouseLeave() {
    setTimeout(() => setBioButtonText('Need a developer?'), 300)
  }


  return (
    <div className="App">
      <header>
        <h1>Muhammad Dean</h1>
        <nav>
          <a href="https://kalebwithak.github.io/resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="bio bio-1">
          <img src={'/images/Kaleb.jpg'} alt="Muhammad Dean" className="bio-img" />

          {/*<p>
            Hello, I am Kaleb Dean a Computer Science major at UNC Charlotte 
            concentrating in Web and Mobile Application Development. Working with you will 
            allow me to put my technical skills to the test, learn from more seasoned 
            developers, and understand the inner workings of business. 
          </p>
          <p>
            I am not only a technical asset, I also have strong communication, 
            leadership, and mentorship skills. In class and in the mixed martial arts club at 
            UNC Charlotte, I help the people next to me understand the material. I 
            have a teamwork mindset where I want to see those around me grow just as much as 
            myself. 
  </p>*/}
          <div className="bio-content">
            <h2>Full Stack Developer</h2>
            <p>
              I am earning my B.A. in Computer Science at the University of North Carolina at 
              Charlotte. I wrote my first lines of code when I was fifteen. I became a TA for an 
              intro to computer science course in my freshman year at High Point University.
            </p>
            <p>Now I build websites for large corporations, small businesses, and entreprenuerial professionals. I graduate in May of 2025.</p>

            <a href="#contact" className="button" 
              onMouseEnter={handleBioButtonMouseEnter}
              onMouseLeave={handleBioButtonMouseLeave}>
                {bioButtonText}
              </a>
          </div>
        </section>

        <section className="projects">
          <h2 className="projects">Projects</h2> 

          <div className="flex"> 
          {projects.map(project => {
            const { title, img, date, purpose, utilized, url, github } = project
            
            return <Project key={"project" + projects.indexOf(project)} 
                title={title} 
                img={img} 
                date={date} 
                purpose={purpose} 
                utilized={utilized}
                url={url}
                github={github}
            />
          })}
          </div>
        </section>

        <div className="grid">
        <section className="skills">
          <div className="soft-skills">
              <h2>Soft Skills</h2>
              <ul>
                {soft_skills.map(skill => <li key={"soft_skill" + soft_skills.indexOf(skill)}>{skill}</li>)}
              </ul>
            </div>

            <div className="technical-skills">
              <h2>Technical Skills</h2>
              <ul>
                {technical_skills.map(skill => <li key={"technical_skill" + technical_skills.indexOf(skill)}>
                  {skill.name} 
                  {/*<span className="datetime" style={{ bottom: 0 }}>{skill.time}</span>*/}
                </li>)}
              </ul>
            </div>
        </section>

        <div className="experience">
            <h2>Experience</h2>

            <div className="jobs">
            {jobs.map(job => {
              const { position, company, img, date, contribution } = job

              return <Experience key={"job"+jobs.indexOf(job)}
                position={position}
                company={company} 
                img={img}
                date={date}
                contribution={contribution}
              />
            })}
            </div>
          </div>

          <div className="education">
            <h2>Education</h2>
            <h3>Pursuing Bachelor's in Computer Science</h3>
            <p>Concentrating in Web and Mobile Application Development</p>
            <p>Anticipated Graduation: <span className="datetime" style={{ bottom: 0 }}>May 2024</span></p>

              <p>University of North Carolina at Charlotte</p>
              <span className="datetime">Fall 2020 - Present</span>
              <p>High Point University</p>
              <span className="datetime">Fall 2019 - Spring 2020</span>
          </div>
        </div>

        <section className="contact" id="contact">
          <h2 id="contact">Do you need a developer? <br /><br />Get in touch!</h2>
          
          <nav className="contact">
            <a href="mailto:muhammadkaleb67@gmail.edu">
              <img src={'/images/mail.png'} />
              <p>muhammadkaleb67@gmail.com</p>
            </a>
            <a href="tel:9802987018">
              <img src={'/images/phone.png'} />
              <p>980-298-7018</p>
            </a>
            <a href="https://goo.gl/maps/TnDGyHT9D2VUAUtv7">
              <img src={'/images/location.png'} /> 
              <p>Charlotte, NC</p>
            </a>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App
