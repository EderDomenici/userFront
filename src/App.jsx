import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/public/Login';
import DefaultLayout from './components/DefaultLayout';
import TestDashboard from './pages/protected/TestDashboard';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />  
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/app" element={<DefaultLayout><TestDashboard /></DefaultLayout>} />
        </Routes>
    </Router>
  );
}

export default App;