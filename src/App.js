//import {Header} from './Codes/Header/Header'
import { AboutMe } from './Codes/AboutMe/about_me';
import { ContactMe } from './Codes/Contacts/contact_me';
import './App.css';
import { Introduction } from './Codes/Introduction/Introduction';
import { NavList } from './Codes/Navigator/Navlist';
import { MoreAboutMe } from './Codes/AboutMe/moreAboutMe';
import Projects from './Codes/Projects/Project';
import { useState } from 'react';
import {NameandDesignation} from './Codes/Header/name'
import { Mail } from './Codes/Header/mail';
import { Phone } from './Codes/Header/phoine';
import './Styling/Header/header.scss';
import soft from './Img/logo.webp';
import './Styling/Header/soft.scss';
import Certification from './Codes/Certification/maincert';
import Hamburger from "hamburger-react";

function App() {
  let[burger, setBurger] = useState(false);
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
      <section id="certification"><Certification /></section>
      <section id="contact"><ContactMe /></section>
    </div>
  );
}

export default App;
