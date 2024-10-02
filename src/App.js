
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import FAQ from './Components/FAQ/FAQ';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import ServiceDetail from './Components/Service/ServiceDeatails';
import Footer from './Components/Footer';



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
        <Route path="/BLOG" element={<Blog/>} />
        {/* <Route path="/BlogDetails" element={<BlogDea/>} /> */}
        <Route path="/serviceDetails" element={<ServiceDetail/>} />
        {/* <Route path="/Service" element={<Service>} /> */}
        <Route path="/About" element={<About/>} />
        
       
      </Routes>
      <Footer/>
      
    </Router>
   
  )
}

export default App

