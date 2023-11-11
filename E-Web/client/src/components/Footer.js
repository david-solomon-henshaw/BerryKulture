import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-dark custom-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <p>
                Address: 123 Tailor Street,
                <br />
                Tailorville, TAIL123
              </p>
              <p>Email: info@yourtailorwebsite.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className='Link' to="/">Home</Link>
              </li>
              <li>
                <Link to="/about" className='Link'>About Us</Link>
              </li>
              <li>
                <Link to="/catalogue" className='Link'>Catalogue</Link>
              </li>
              <li>
                <Link to="/contact" className='Link'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="#">
                  <FaFacebook className="text-primary" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter className="text-info" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram className="text-danger" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; 2023 KingsKaftan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
