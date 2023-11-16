import './App.css';
import React, { Component } from 'react';
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </Router>
  );
}
}

export default App;
