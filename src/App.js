import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path="/" component={Home} />
          <Route path="/building" component={Building} />
          <Route path="/contact" component={Contact} />
          <Route path="/availability" component={Availability} />
          <Route path="/incentives" component={Incentives} />
          <Route path="/neighborhood" component={Neighborhood} />
          <Route path="/views" component={Views} />
          <Route path="/team" component={Team} />
          <Route path="/press" component={Press} />
          <Route path="/legal" component={Accessibility} />
        </div>
    </Router>
  );
};

export default App;
