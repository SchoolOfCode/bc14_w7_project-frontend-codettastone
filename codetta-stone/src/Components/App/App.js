
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../SideBar/index.js';
import {Col, Row, Container} from 'react-bootstrap';
import Quiz from '../Quiz/index.js';
import NavScrollExample from "../Navbar";
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from '../Login/index.js';
import Register from '../Register/index.js';


function App() {
  return (
    <>
    
   {/* Navigation Bar and routes to components paths */}
    <NavScrollExample/> 
    <Sidebar/> 
    <Quiz/>
    
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
