import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './Appointment';
import Home from './Home';
import Location from './Location';
import Services from './Services';
import Teams from './Teams';
import Confirmation from './Confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/SEG31" exact element={<Home/>}></Route>
          <Route path="/SEG31/location" exact element={<Location/>}></Route>
          <Route path="/SEG31/services" exact element={<Services/>}></Route>
          <Route path="/SEG31/teams" exact element={<Teams/>}></Route>
          <Route path="/SEG31/appointment" exact element={<Appointment/>}></Route>
          <Route path="/SEG31/confirmation" exact element={<Confirmation/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
