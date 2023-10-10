
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Registration from './pages/registration';
import Attendance from './pages/attendence';
import Dashboard from './pages/Dashboard';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Attendance" element={<Attendance />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
