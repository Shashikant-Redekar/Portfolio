import { useState } from 'react';
import Apollo_P from '../../Img/ApolloGraphQL_P.png';
import Apollo_A from '../../Img/ApolloGraphQL_A.png';
import Left from '../../Img/left.png';
import Right from '../../Img/right.png';
import '../../Styling/Certificate/cert.scss';
import '../../Styling/Certificate/arrowButton.scss';


const Certification = function() {
    const cert = [Apollo_P,Apollo_A];
    const certName = ["Apollo Graph Developer Professional","Apollo Graph Developer Associate"];
    let [display, setDisplay] = useState(0);

    function handleRotation(direction, dis) {
        if(direction === "left" && dis === 0){
            setDisplay(cert.length - 1);
        }else if(direction === "left" && dis !== 0){
            setDisplay(display - 1);
        }else if(direction === "right" && dis === cert.length -1){
            setDisplay(0);
        }else{
            setDisplay(display + 1);
        }
    }

    return(
        <div className='cert'>
            <div>
                <h1 className='certHeader'>Certification</h1>
            </div>
            <div className='certAndName'>
                    <p className='certName'>{certName[display]}</p>
                <div className='certbody'>
                    <button className='arrowbutton' onClick={() => handleRotation("left",display)}><img src={Left} alt="icon" className='leftright' ></img></button>
                    <img src={cert[display]} alt="icon" className='certimg' ></img>
                    <button className='arrowbutton' onClick={() => handleRotation("right",display)}><img src={Right} alt="icon" className='leftright' ></img></button>
                </div>
            </div>
        </div>
    )
};

export default Certification;