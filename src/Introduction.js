import './Styling/Introduction/intro.scss';
import myPhoto from './Img/Clipped_image_20250329_140511.png';

export const Introduction = () => (
    <div className="intro"> 
        <div className='about'>
            <h1>Hello, I am Shashikant!</h1>
            <h3>Software Engineer at Tech Mahindra</h3>
            <p>React UI Developer | Telecom Mediation and Billing | Application support L2 | Oracle SQL & PLSQL | Unix shell scripting</p>
        </div>
        <div className='pic'>
            <img src={myPhoto} alt="icon" className='big'></img>
        </div>
    </div>
);
