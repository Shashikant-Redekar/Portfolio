import './Styling/AboutMe/aboutme.scss';
import './Styling/AboutMe/downloadCV.scss';
import pdf from './Img/ShashikantRedekarResume.pdf';

export const AboutMe = () => (
    <div className="aboutme"> 
        <h1 className='aboutmeH'>About Me</h1>
        <p className='aboutmeD'>Passionate web developer with experience in developing responsive, user-friendly website for Food Ordering for Sukoon Sagar Restaurant.
            I aspire to Pivot my career from application support to UI design to my passion for web development.
        </p>
        <p className='aboutmeDi'>Skillsets: JavaScript, TypeScript, HTML/CSS, frameworks like React.</p>
        <br></br>
        <p className='aboutmeD'>I'm excited about opportunities that involve working with content-management system, so I can utilize
            my experience and make website visually appealing and easy to navigate.
        </p>
        <br></br>
        <p className='aboutmeD'>Currently working as a Software Engineer providing application support for Mediation/CTDC and Billing, my task invloves developing new solutions,
            automation, handling incidents and change requests, altering codes and fixing bugs, etc.
        </p>
        <p className='aboutmeDi'>Skillsets: Oracle SQL & PLSQL, Unix shell scripting.</p>
        <a href={pdf} download={"Shashikant's Resume"} className='d'>
            <button className='dcv'>Download CV</button>
        </a>
    </div>
);