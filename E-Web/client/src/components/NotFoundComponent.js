import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4">404 - Page Not Found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
