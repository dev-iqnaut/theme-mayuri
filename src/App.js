
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';

import ServiceDetail from './Components/ServiceDeatails';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import BlogDetails from './Components/BlogDetails';
import FAQ from './Components/FAQ';


// import EmployeeForm from './components/EmployeeForm'
function App() {
 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Service Details" element={<ServiceDetail/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Blogs" element={<Blog/>}/>
        <Route path="/BlogDetails" element={< BlogDetails/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        {/* <Route path="/payroll-dashboard" element={<PayrollDashboard/>}/>
        <Route path="/leave" element={<LeaveForm/>}/>
        <Route path="/leave-history" element={<LeaveHistory/>}/>
        <Route path="/leave-approval" element={<LeaveTable/>}/>
        <Route path="/payroll-report" element={<PayrollReport/>}/>
        <Route path="/directory" element={<EmployeeTable/>}/>
        <Route path="/profile/:name" element={<EmployeeDetails/>}/>
        <Route path="/department-management" element={<DepartmentTable/>}/>
        <Route path="/notification" element={<Notification/>}/> */}
      </Routes>
      
    </Router>
   
  )
}

export default App

