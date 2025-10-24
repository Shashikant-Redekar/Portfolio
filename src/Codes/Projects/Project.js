import { useState } from 'react';
import Up from '../../Img/up.png';
import Down from '../../Img/down.png';
import Projectscreen from '../../Img/Capture.png';
import Calculator from '../../Img/calculator.png';
import Landing from '../../Img/landing.png';
import Todo from '../../Img/todo.png';
import '../../Styling/Project/sukoonsagar.scss';
import '../../Styling/Project/project.scss';

const Projects = function (){

    const proimg = [Projectscreen, Landing, Calculator, Todo];
    const proname = ["Food Ordering App for Sukoon Sagar Resturant","Landing Page for Sukoon Sagar Resturant","Calculator","To-Do List"];
    const prodes = ["A user-friendly website for ordering food, the oder will be directly displayed in the kitchen screen, with details of order from the table number at which it is ordered and the name of the customer who ordered it.",
        "A clean, responsive landing page featuring:\n\nStructured Sections.\nMobile-friendly design.\nSmooth scroll between sections.\n\nBuilt to be visually appealing and easy to navigate on all devices.",
        "A responsive, retro-themed calculator that supports:\n\n Basic Operations (+, -, x, /).\nBracket and negative numbers.\nCustom parser(no eval) using infix-to-postfix conversion.\nBackspace button.",
        "A clean and responsive to-do list app with:\n\nAdd, edit, delete and complete tasks.\nCheckboxes to mark task as done.\nLocal Storage to preserve tasks on refresh.\nFilter option: All, Active and complete.\nInline editing.\nDate display and clean layout for mobile and desktop."
    ];
    const proSkills = ["Skills: JavaScript, HTML/CSS, React","Skills: JavaScript, HTML/CSS, React","Skills: JavaScript, DSA, HTML/CSS, React","SKills: JavaScript, React, Local Storage API, React Hooks, HTML/CSS."];
    const tags=["#","https://shashikant-redekar.github.io/Landing_page/","https://calculator0998.netlify.app/","https://shashikant-redekar.github.io/to-do/"]

    let [display, setDisplay] = useState(0);

    function handleRotation(direction, dis) {
        if(direction === "left" && dis === 0){
            setDisplay(proimg.length - 1);
        }else if(direction === "left" && dis !== 0){
            setDisplay(display - 1);
        }else if(direction === "right" && dis === proimg.length -1){
            setDisplay(0);
        }else{
            setDisplay(display + 1);
        }
    }

    return(
        <div className='projects'>
            <div>
                <h1 className='projectH'>Projects</h1>
                <div>
                    <button className='arrowbutton' onClick={() => handleRotation("left",display)}><img src={Up} alt="icon" className='leftright' ></img></button>
                    <div className='ss'>
                        <img src={proimg[display]} alt="icon" className='projectscreen' ></img>
                        <div className='ssd'>
                        <h3 className='ssdH'><a className="ssdht" href={tags[display]}>{proname[display]}</a></h3>
                        <p className="ssdD" style={{whiteSpace:`pre-line`}}>{prodes[display]}</p>
                         <p className="ssdS">{proSkills[display]}</p>
                    </div>
                </div>
                    <button className='arrowbutton' onClick={() => handleRotation("right",display)}><img src={Down} alt="icon" className='leftright' ></img></button>
                </div>
            </div>
        </div>
    )
};

export default Projects;
// export const Projects = () => (
//     <div className="projects"> 
//         <h1 className='projectH'>Projects</h1>
//         <div className='ss'>
//             <img src={projectscreen} alt="icon" className='projectscreen' ></img>
//             <div className='ssd'>
//                 <h3 className='ssdH'>Food Odering App for Sukoon Sagar Resturant</h3>
//                 <p className="ssdD">A user-friendly website for odering food, the oder will be directly displayed in the kitchen screen, with details of order from the table number at which it is ordered 
//                 and the name of the customer who ordered it.</p>
//                 <p className="ssdS">Skills: JavaScript, HTML/CSS, React</p>
//             </div>
//         </div>
//     </div>
// );