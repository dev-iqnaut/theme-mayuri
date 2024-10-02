
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import FAQ from './Components/FAQ/FAQ';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';

import Footer from './Components/Footer';
import BlogDetails from './Components/BlogDetails/BlogDetail';
import Service from './Components/Service/Service';
import ServiceDetail from './Components/Service/ServiceDetailMAin';





// import EmployeeForm from './components/EmployeeForm'
function App() {
 
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/BlogDetails" element={<BlogDetails/>} />
        <Route path="/ServiceDetails" element={<ServiceDetail/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/About" element={<About/>} />
        
       
      </Routes>
      <Footer/>
      
    </Router>
   
  )
}

export default App

