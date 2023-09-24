import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from '../components/SideBar';
import ProjectsContainer from './ProjectsContainer';
import TechStack from '../components/TechStack';
import Home from '../components/Home';
import Error from '../components/Error';
import Experience from '../components/Experience';

const MainContainer = () => {
    return ( 
        <Router>
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/*" element={<ProjectsContainer />} />
                <Route path="/techstack" element={<TechStack />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
     );
}
 
export default MainContainer;