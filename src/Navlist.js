import { Link } from "react-scroll";
import './Styling/Navigation/nav.scss';
import insta from './Img/instagram.png';
import linkin from './Img/linkedin (1).png';
import './Styling/Navigation/linkin.scss';
import './Styling/Navigation/insta.scss';
import './Styling/Navigation/navlink.scss';
import { Mail } from "./Codes/Header/mail";
import { Phone } from "./Codes/Header/phoine";

export const NavList = (props) => (
    <div className={!props.burger ? "navlink" : "navbur"}>
        <nav className='navm'>
            <div className='navbar'>
                <p>              
                    <Link activeClass="active" smooth spy to="about" className='about' offset={!props.burger ? -188 : -90} onClick={() =>(props.setBurger(false))}>About</Link>
                </p>
                <p>
                    <Link activeClass="active" smooth spy to="project" className='project' offset={!props.burger ? -188 : -90}  onClick={() =>(props.setBurger(false))}>Projects</Link>
                </p>
                <p>
                    <Link activeClass="active" smooth spy to="contact" className='contact' offset={!props.burger ? -188 : -90 } onClick={() =>(props.setBurger(false))}>Contact</Link>
                </p>
            </div>
        </nav>
        <div className={!props.burger ? 'notmailaphone': 'mailaphone'}>
            <Mail />
            <Phone />
        </div>
        <div className='link'>
            <a href='https://www.linkedin.com/in/shashikant-redekar-957273168/'>
                <img src={linkin} alt="icon" className='linkin' ></img>
            </a>
            <a href='https://www.instagram.com/cb350.nimbus/'>
                <img src={insta} alt="icon" className='insta'></img>
            </a>
        </div>
    </div>

);