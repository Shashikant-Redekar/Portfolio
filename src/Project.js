import projectscreen from './Img/Capture.PNG';
import './Styling/Project/sukoonsagar.scss';
import './Styling/Project/project.scss';

export const Projects = () => (
    <div className="projects"> 
        <h1 className='projectH'>Projects</h1>
        <div className='ss'>
            <img src={projectscreen} alt="icon" className='projectscreen' ></img>
            <div className='ssd'>
                <h3 className='ssdH'>Food Odering App for Sukoon Sagar Resturant</h3>
                <p className="ssdD">A user-friendly website for odering food, the oder will be directly displayed in the kitchen screen, with details of order from the table number at which it is ordered 
                and the name of the customer who ordered it.</p>
                <p className="ssdS">Skills: JavaScript, HTML/CSS, React</p>
            </div>
        </div>
    </div>
);