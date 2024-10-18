
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
import New from './Components/New/New';
import AcademicResources from './Components/New/Academic_Res';
import Academics from './Components/New/AcademicSec';
import Admissions from './Components/New/Admission';
import NewsEventsSection from './Components/New/Event';
import FacultyStaffSection from './Components/New/Faculty';
import GalleryComponent from './Components/New/Gallery';
import InfrastructureSection from './Components/New/Infrastructure';





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
        <Route path="/New" element={<New/>} />



        <Route path="/Academic_re" element={<AcademicResources/>} />
        <Route path="/Academic" element={<Academics/>} />
        <Route path="/Admission" element={<Admissions/>} />
        <Route path="/News" element={<NewsEventsSection/>} />
        <Route path="/Faculty" element={<FacultyStaffSection/>} />
        <Route path="/Gallery" element={<GalleryComponent/>} />
        <Route path="/Infrastructure" element={<InfrastructureSection/>} />
        
              
       
      </Routes>
      <Footer/>
      
    </Router>
   
  )
}

export default App

