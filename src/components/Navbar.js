import '../App.css';
import React, { Link } from 'react-router-dom';
import dino from '../Images/dino.png'

function Navbar(){
    return(
    <>
{
    <div class="topnav" id="myTopnav">
    <img class = 'logo' src={dino} alt ='dinosaur logo' />
    {/* <Link to="/aboutme" class = "right" id = "abouttab">About Me</Link> */}
    <Link to="/HomanPortfolio/softwaredevelopment" class = "right" id = "sdtab">Software Development</Link>
    <Link to="/HomanPortfolio/cyber"  id = "cybertab">Cybersecurity</Link>
    <Link to="/"  id = "hometab">Home</Link>
</div >

}

    </>
    )
};

export default Navbar;