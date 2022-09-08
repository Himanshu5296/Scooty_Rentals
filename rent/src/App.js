import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Outlet from './Components/Outlet/Outlet';
import Vehicle from './Components/Vehicle/Vehicle';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Outlet/>}></Route>
        <Route path="/vehicle" element={<Vehicle/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

