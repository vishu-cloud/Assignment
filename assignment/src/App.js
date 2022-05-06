import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spash from "./Spash";
import Login from "./Login";
import Onboard1 from "./Onboard1";
import Onboard2 from "./Onboard2";
import Onboard3 from "./Onboard3";
import Onboard4 from "./Onboard4";
import Dashboard from "./Dashboard";
import Setting from "./Setting";
import Check from "./Check";
import WarningCheck from "./WarningCheck";
import Exam from './Exam.js';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
           <Route path="/" element={<Spash/>} /> 
           <Route path="/login" element={<Login/>} />
           <Route path="/onboard1" element={<Onboard1/>} />
           <Route path="/onboard2" element={<Onboard2/>} />
           <Route path="/onboard3" element={<Onboard3/>} />
           <Route path="/onboard4" element={<Onboard4/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/setting" element={<Setting/>} />
           <Route path="/dashboard/Check" element={<Check/>} />
           <Route path="/warning" element={<WarningCheck/>} />
           <Route path="/dashboard/Check/exam" element={<Exam/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
