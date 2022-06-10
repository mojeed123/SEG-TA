import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './Appointment';
import Home from './Home';
import Location from './Location';
import Services from './Services';
import Teams from './Teams';
import Confirmation from './Confirmation';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/location" exact element={<Location />}></Route>
          <Route path="/services" exact element={<Services />}></Route>
          <Route path="/teams" exact element={<Teams />}></Route>
          <Route path="/appointment" exact element={<Appointment />}></Route>
          <Route path="/confirmation" exact element={<Confirmation />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
