import {NameandDesignation} from './name'
import { Mail } from './mail';
import { Phone } from './phoine';
import '../../Styling/Header/header.scss';
import soft from '../../Img/logo.webp';
import '../../Styling/Header/soft.scss';
//import { Ham } from './hamburger';
import Hamburger from "hamburger-react";
import { useState } from 'react';

export const Header = (props) => {
    let[ber, setBer] = useState(props.burger);
    props.setBurger(ber);
    return(
        <div className='header'> 
            <div className='softname'>
                <img src={soft} alt="icon" className='soft' ></img>
                <NameandDesignation />
            </div>
            <div className={!props.burger ? 'mailAndPhone' : 'mailaphone'}>
                <Mail />
                <Phone />
                <div className='ham'>
                    <Hamburger toggled={ber} toggle={setBer}/> 
                </div>
            </div>
        </div>
    )
}

// export const Header = (props) => (
//     <div className='header'> 
//         <div className='softname'>
//             <img src={soft} alt="icon" className='soft' ></img>
//             <NameandDesignation />
//         </div>
//         <div className='mailAndPhone'>
//             <Mail />
//             <Phone />
//             <div className='ham'>
//                 <Ham burger={props.burger} setBurger={props.setBurger}/>
//             </div>
//         </div>
//     </div>
// );