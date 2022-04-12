import React from 'react';
import Navbar from '../components/Navbar.js'

function SoftwareDevelopment(){
    return(
    <>
    {
        <div class = "sdbackground">
         <body>
                <Navbar></Navbar>
                <div class = 'homecontent'>
                <h1 class = 'hometitle'>Software Development</h1>
                        <li class = 'homeblurb'>
                        Completed 13 week Supra Coders &nbsp;
                            <a class = 'sdlink' href="https://supracoders.us/software-development-immersive">
                            Software Development Immersive
                            </a>
                            &nbsp;and 3 month Internship with Saber Astronautics working on the  &nbsp;
                            <a class = 'sdlink' href="https://www.saberastro.com/space-cockpit/">
                            Space Cockpit
                            </a>
                            &nbsp; Program
                        </li>
                        <li class = 'homeblurb'>
                        Earned &nbsp;
                        <a class = 'sdlink' href="http://supracoders.us/z-prefix">
                            Z-Prefix
                        </a>
                        &nbsp; by passing paired programming interview and creating CRUD app
                        </li>
                <h1 class = 'hometitle'>My Projects</h1>
                    <li  class = 'projectblurb'>
                    Projects will take 1-3 minutes to spin up after clicking the links for frontend and backend.
                    </li>
                    <li class = 'projectblurb'>
                    Click the link for both frontend and backend of the project you'd like to view.
                    </li>
                    <li class = 'projectblurb'>
                    Embark takes longer to start than the blog, so spin it up before you begin browsing the blog.
                    </li>
                    <li class = 'projectblurb'>
                    If a message saying "Application error" pops up, refresh the page and the app should load.
                    </li>

                    <li class = 'homeblurb'>
                        <a class = 'sdlink' href="https://blog-frontend-homan.herokuapp.com/">
                            Blog Frontend
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                        <a class = 'sdlink' href="https://blog-backend-homan.herokuapp.com/">
                            Blog Backend
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                        <a class = 'sdlink' href="https://blog-backend-homan.herokuapp.com/">
                            Blog Code
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                        <a class = 'sdlink' href="https://embark-frontend.herokuapp.com/">
                            Embark Frontend
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                        <a class = 'sdlink' href="https://embark-backend.herokuapp.com/">
                            Embark Backend
                        </a>
                    </li>
                    <li class = 'homeblurb'>
                        <a class = 'sdlink' href="https://embark-backend.herokuapp.com/">
                            Embark Code
                        </a>
                    </li>



                    <h1 class = 'hometitle'>CRUD Blog</h1>
                    <li class = 'sdtitle'>
                    My Role
                    </li>
                    <li class = 'projectblurb'>
                    The first full stack CRUD app I deployed, built using React, Express, and a Postgresql database
                    </li>
                    <li>
                    I created this application to earn my Z-Prefix as a Supra Coder in the Space Force. It was a solo project.
                    </li>
                    <li class = 'sdtitle'>
                    Difficulties
                    </li>
                    <li class = 'projectblurb'>
                    The database can't store any passwords.
                    </li>
                    <li class = 'projectblurb'>
                    Users need to authenticate.
                    </li>
                    <li class = 'projectblurb'>
                    There was a 72 hour timeline.
                    </li>
                    <li class = 'sdtitle'>
                   Solutions
                    </li >
                    <li class = 'projectblurb'>
                    Bcrypt is used to hash passwords before they're sent to the database.
                    </li>
                    <li class = 'projectblurb'>
                    A JSON web token is used for authentication.
                    </li>
                    <h1 class = 'hometitle'>Embark</h1>
                    <li class = 'sdtitle'>
                    My Role
                    </li>
                    <li class = 'projectblurb'>
                    I worked on this application with a team of four.
                    </li>
                    <li class = 'projectblurb'>
                    I mostly worked on frontend logic including authentication, fetching from the server/database, and mapping information on the page
                    </li>
                    <li class = 'sdtitle'>
                    Difficulties
                    </li>
                    <li class = 'projectblurb'>
                    Having accounts with different privilege levels and UI/functionality based on privilege level.
                    </li>
                    <li class = 'sdtitle'>
                   Solutions
                    </li >
                    <li class = 'projectblurb'>
                    Authentication grants a JSON token that is used to conditionally
                    </li>
                    <li class = 'projectblurb'>
                    A JSON web token is used for authentication.
                    </li>





                </div>
            </body>
        </div>
    }
    </>
    )
};

export default SoftwareDevelopment;