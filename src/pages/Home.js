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
                        Systems Administrator.
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                        From here, I transitioned into a role as a &nbsp;
                        <a class = 'cylink' href="https://www.airforce.com/careers/detail/cyber-systems-operations">
                        Cybersecurity Analyst
                            </a>
                            &nbsp;in the Space Force.
                    </li>
                    <li class = 'homeblurb'>
                    In 2022, I was accepted into a 6 month &nbsp;
                    <a class = 'sdlink' href="https://www.airforce.com/careers/detail/cyber-systems-operations">
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