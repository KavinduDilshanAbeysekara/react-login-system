import React from 'react';
import '../App.css';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div className="container">
      <h2>Please Log In</h2>
    </div>
  );
};

export default ProtectedRoute;
