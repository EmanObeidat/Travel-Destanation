import './App.css';
import Home from './Components/Home/Home'
import TourDetails from './Components/TourDetails/TourDetails';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
const data=require("../src/data/data.json");
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
      

    </div>
  )
    }
  


export default App;