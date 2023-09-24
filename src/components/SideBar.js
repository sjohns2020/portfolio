import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import headpic from '../images/me2.png';
import api from '../images/apileafletcharts.png'
import airport from '../images/airport.png'
import dino from '../images/dinosaur.png'
import experience from '../images/experience.png'
import gratitude from '../images/gratitude.png'
import home from '../images/home.png'
import projects from '../images/projects.png'
import techstack from '../images/techstack.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import './SideBar.css';


const SideBar = () => {


    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <NavLink exact to="/" activeClassName="active">
                        <img className="profile-pic" src={headpic} alt="head pic" />
                </NavLink>
            </div>
            <div className="sidebar-header">
                <div className="title">
                        <p className="dharma3">Sean Johnson</p>
                        <br/>
                        <i className="dharma4">SOFTWARE ENGINEER & INSTRUCTOR</i>
                </div>
                <ul className="nav-links">
                    {/* <li>
                    <NavLink exact to="/" activeClassName="active">
                        <img src={home} alt="home" className="dharma" />
                        <p className="dharma2">Home</p>
                    </NavLink>
                </li> */}
                    <li>
                        <NavLink to="/projects" activeClassName="active">
                            <div className="side-link">
                                <img src={projects} alt="projects" className="dharma" />
                                <span className="dharma2">Projects</span>
                            </div>
                        </NavLink>
                    </li>
          

                    <li>
                        <NavLink to="/techstack" activeClassName="active">
                            <div className="side-link">
                                <img src={techstack} alt="tech_stack" className="dharma" />
                                <p className="dharma2">TechStack</p>

                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" activeClassName="active">
                            <div className="side-link">
                                <img src={experience} alt="experience" className="dharma" />
                                <p className="dharma2">Experience</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <div className="gitlinked">
                        <NavLink activeClassName="active-header" to="https://www.linkedin.com/in/communicasean/">
                            <div className="side-link">
                                <img src={github} alt="github" className="dharma" />
                            </div>
                        </NavLink>
                        <NavLink activeClassName="active-header" to="https://github.com/sjohns2020">
                            <div className="side-link">
                                <img src={linkedin} alt="linked-in" className="dharma" />
                            </div>
                        </NavLink>
                        </div>

                    </li>

                </ul>
            </div>
        </nav >
    );
};

export default SideBar;
