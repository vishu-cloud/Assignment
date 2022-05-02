import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spash from "./Spash";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
           <Route path="/" element={<Spash/>} /> 
           <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
