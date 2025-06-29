import '../../Styling/MoreAboutMe/more.scss';
import '../../Styling/MoreAboutMe/one.scss';
import '../../Styling/MoreAboutMe/two.scss';
import '../../Styling/MoreAboutMe/three.scss';
import '../../Styling/MoreAboutMe/moreaboutmedetail.scss';

export const MoreAboutMe = () => (
    <div className="more">
        <div className='one'> 
            <h6 className='mah'>01 \ Education</h6>
            <h3 className='mayear'>2019</h3>
            <h2 className='mash'>Bachelor of Engineering -</h2>
            <h5 className='madetails'>I graduated with a Bachelor of Engineering from Pune University, Vishwakarma Institute of Information Technology.</h5>
        </div>
        <div className='two'>
            <h6 className='mah'>02 \ First Job</h6>
            <h3 className='mayear'>2021</h3>
            <h2 className='mash'>Software Engineer at Tech Mahindra-</h2>
            <h5 className='madetails'>For 4 years, joined here as an Intern, providing application support to Mediation and Billing application</h5>
            <h5 className='madetails'>Associate Software Engineer(Jul 2021 - Nov 2022)</h5>
            <h5 className='madetails'>Software Engineer(Nov 2022 - Present)</h5>
            <h5 className='madetails'>Skills: Linux, Shell Scripting, Oracle SQL & PLSQL, HTML Emails, CSS, Python, Automation</h5>
        </div>
        <div className='three'>
            <h6 className='mah'>03 \ Projects</h6>
            <h3 className='mayear'>2024</h3>
            <h2 className='mash'>Food Ordering App for Sukoon Sagar Resturant -</h2>
            <h5 className='madetails'>A user-friendly website for odering food, started this for learning purpose.</h5>
            <h5 className='madetails'>Skills: JavaScript, HTML/CSS, React</h5>
        </div>
    </div>
);