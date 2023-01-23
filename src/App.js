import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import Home from './components/pages/Home'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes>
            <Route path={'/AboutUs'} component={AboutUs}></Route>
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            <Route path={'/'} component={Home}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;