//import {Header} from './Codes/Header/Header'
import { AboutMe } from './about_me';
import { ContactMe } from './contact_me';
import './App.css';
import { Introduction } from './Introduction';
import { NavList } from './Navlist';
import { MoreAboutMe } from './moreAboutMe';
import { Projects } from './Project';
import { useState } from 'react';
import {NameandDesignation} from './Codes/Header/name'
import { Mail } from './Codes/Header/mail';
import { Phone } from './Codes/Header/phoine';
import './Styling/Header/header.scss';
import soft from './Img/logo.webp';
import './Styling/Header/soft.scss';
//import { Ham } from './hamburger';
import Hamburger from "hamburger-react";

function App() {
  let[burger, setBurger] = useState(false);
  console.log(burger);
  return (
    <div className="App">
      <div className='header'> 
            <div className='softname'>
                <img src={soft} alt="icon" className='soft' ></img>
                <NameandDesignation />
            </div>
            <div>
              <div className='mailAndPhone'>
                <Mail />
                <Phone />
              </div>
              <div className='ham'>
                  <Hamburger toggled={burger} toggle={setBurger}/> 
              </div>
            </div>
        </div>
      <NavList burger={burger} setBurger={setBurger}/>
      <Introduction />
      <section id="about"><AboutMe /></section>
      <MoreAboutMe />
      <section id="project"><Projects /></section>
      <section id="contact"><ContactMe /></section>
    </div>
  );
}

export default App;
