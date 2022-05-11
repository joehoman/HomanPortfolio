import React from 'react';
import Navbar from '../components/Navbar.js'

function Home(){
    return(
    <>
    {
        <div class = "homebackground">
         <body>
                <Navbar></Navbar>
                <h1 class = 'hometitle'>Welcome to my Portfolio</h1>
                <div class = 'homecontent'>
                    <li class = 'homeblurb'>
                        I joined the Air Force in 2019 as a &nbsp;
                        <a class = 'syslink' href="https://www.airforce.com/careers/detail/cyber-systems-operations">
                        System Administrator.
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                         I transitioned into the Space Force as a  &nbsp;
                        <a class = 'cylink' href="https://joehoman.github.io/HomanPortfolio/#/HomanPortfolio/cyber">
                        Cybersecurity Analyst
                            </a>
                            &nbsp; in 2021.
                    </li>
                    <li class = 'homeblurb'>
                    In 2022, I was accepted into a 6 month &nbsp;
                    <a class = 'sdlink' href="https://joehoman.github.io/HomanPortfolio/#/HomanPortfolio/softwaredevelopment">
                        Software Development
                            </a>
                    &nbsp;program.
                    </li>
                </div>
            </body>
        </div>
    }
    </>
    )
};

export default Home;