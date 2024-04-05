//import logo from './logo.svg';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
//import Welcome from './Components/Welcome';
import Projects from './Components/Project';
import ProjectDetails from './Components/ProjectDetails';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Homer from './Components/Homer';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="Content">
      <Routes>
          <Route path='/' element={
            <>
            <Homer/>
            </>
          } />
          <Route path = '/Projects' element = {<Projects />}/>
          <Route path = '/Experience' element = {<Experience />}/>
          <Route path = '/About' element = {<Home/>}/>
          {/* <Route path = '/data/Jeffrey%20Liang%20Resume.pdf' element = {<RealResume/>}/> */}
          {/* <Route path="/Projects/:id" element={<ProjectDetails />} /> */}
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
    
  );
}

export default App;
