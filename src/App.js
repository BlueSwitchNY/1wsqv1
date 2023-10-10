import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Building,
  Contact,
  Availability,
  Incentives,
  Neighborhood,
  Views,
  Team,
  Press,
  Accessibility,
  SkipLinks
} from './components/_module';

const App = () => {
  return (
    <Router>
        <div className="App">
          <SkipLinks />
          <h1 className="hidden">1 Willoughby Square</h1>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/building" element={<Building />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/incentives" element={<Incentives />} />
            <Route path="/neighborhood" element={<Neighborhood />} />
            <Route path="/views" element={<Views />} />
            <Route path="/team" element={<Team />} />
            <Route path="/press" element={<Press />} />
            <Route path="/legal" element={<Accessibility />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
