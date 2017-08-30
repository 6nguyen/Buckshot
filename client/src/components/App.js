import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveryNew = () => <h2>Survery New</h2>
const LandingPage = () => <h2>Landing Page</h2>

const App = () => {
  return (
    <div>
    // BrowserRouter can only have ONE child, so put everything in a div
      <BrowserRouter>
        <div>
          // path="/" specifies the root route.  Relative path, no domain name included
          <Route path="/" component ={LandingPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
