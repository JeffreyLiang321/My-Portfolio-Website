import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Project';
import ProjectDetails from './Components/ProjectDetails';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Homer from './Components/Homer';

function App() {
  return (
    <Router basename="/My-Portfolio-Website">
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path='/' element={<Homer />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/About' element={<Home />} />
            <Route path='/Contacts' element={<Contact />} />
            {/* Add a catch-all route to redirect to home */}
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
