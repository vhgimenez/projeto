import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Plan } from './Pages/Plan/Plan';
import { Actives } from './Pages/Actives/Actives';
import { Summary } from './Pages/Actives/Summary/Summary';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path='/actives' element={<Actives />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </Router>
  );
}

