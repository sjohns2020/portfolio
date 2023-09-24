import { Route, Routes } from "react-router-dom";

const Projects = () => {
    return ( 
        <Routes>
            <Route path="/" />
            <Route path="/project1" />
            <Route path="/project2"/>
            <Route path="/project3"/>
            <Route path="/project4"/>
        </Routes>
     );
}
 
export default Projects;