import '../../Styling/ContactMe/header.scss';
import '../../Styling/ContactMe/all.scss';
import '../../Styling/ContactMe/contacts.scss';
import call from '../../Img/phone.png';
import mail from '../../Img/email.png';
import linkedin from '../../Img/linkedin.png';

export const ContactMe = () => (
    <div className='all'> 
        <div className='headerc'>
            <h1 className='headercH'>Hire Me For Your Project</h1>
            <p className='headercD'> Contact me in any convenient way to discuss the details.</p>
        </div>
        <div className='contacts'>
            <div className='mailc'>
                <img src={mail} alt="icon" className='maili' ></img>
                <p className='p'>Write Me -</p>
                <a  className='a' href='mailto:shashikant.redekar.2809.ps@gmail.com'>shashikant.redekar.2809.ps@gmail.com</a>
            </div>
            <div className='phonec'>
                <img src={call} alt="icon" className='phonei' ></img>
                <p className='p'>Call Me -</p>
                <a className='a' href='tel:+919763737059'>+91 9763737059</a>
            </div>
            <div className='linkc'>
                <img src={linkedin} alt="icon" className='linkedini' ></img>
                <p className='p'>Find Me -</p>
                <a className='a' href='https://www.linkedin.com/in/shashikant-redekar-957273168/'>www.linkedin.com/in/shashikant-redekar-957273168</a>
            </div>
        </div>
    </div>
);