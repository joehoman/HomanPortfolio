import React from 'react';
import Navbar from '../components/Navbar.js'

function Cyber(){
    return(
    <>
    {
        <div class = "cyberbackground">
         <body>
                <Navbar></Navbar>
                <h1 class = 'hometitle'>Cybersecurity</h1>
                <div class = 'homecontent'>
                    <li class = 'homeblurb'>
                        Developed a system to hunt endpoint and network threats to complete bachelor's degree at WGU. &nbsp;
                        <a class = 'cylink' href="https://docs.google.com/document/d/1ETyGLH99SIg4WjaN9p-SXbv6AcevbmE3/edit?usp=sharing&ouid=115229049815502234181&rtpof=true&sd=true">
                        This
                        </a>
                         &nbsp;is the project proposal.
                    </li>
                    <li class = 'homeblurb'>
                        Selected for &nbsp;
                        <a class = 'cylink' href="https://docs.google.com/document/d/1YXj41BqaJaI4aI6dKY_uhaq9M3h10LDrA5K1fX3D3Hk/edit?usp=sharing">
                        recognition
                        </a>
                        &nbsp;for a  &nbsp;
                        <a class = 'cylink' href="https://docs.google.com/document/d/17f9w0XYtk5Yk8NRbchO52tFSGgf04BtR/edit?usp=sharing&ouid=115229049815502234181&rtpof=true&sd=true">
                        writeup
                        </a>
                        &nbsp; of a network vulnerability analysis using NMAP and Wireshark.

                    </li>
                     <li class = 'homeblurb'>
                        Experience standing up a Security Operations Center monitoring DOD assets
                    </li>
                    <li class = 'homeblurb'>
                    Certifications listed in &nbsp;
                    <a class = 'cylink' href="https://www.airforce.com/careers/detail/cyber-systems-operations">
                        resume
                            </a>
                    </li>
                </div>
            </body>
        </div>
    }
    </>
    )
};

export default Cyber;