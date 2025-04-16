import Hamburger from "hamburger-react";
import { useState } from 'react';

export const Ham = (props) => {
    let[ber, setBer] = useState(props.burger);
    props.setBurger(ber);
    return(
        <Hamburger toggled={ber} toggle={setBer}/> 
    );
};
