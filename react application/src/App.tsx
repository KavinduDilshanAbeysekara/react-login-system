import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ListEmployeeComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-employee"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddEmployeeComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-employee/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddEmployeeComponent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
