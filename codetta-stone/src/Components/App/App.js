
import './App.css';
import NavScrollExample from "../Navbar";
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from '../Login/index.js';
import Register from '../Register/index.js';


function App() {
  return (
    <>
    
   {/* Navigation Bar and routes to components paths */}
    <NavScrollExample/> 
    <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
      </Routes>
     
    </>
  )
    
   
  
}

export default App;
