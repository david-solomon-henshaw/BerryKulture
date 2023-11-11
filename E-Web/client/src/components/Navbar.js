import brandLogo from '../assets/berryKulture.png'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri'; // Import the cart icon from React Icons
import { useSelector } from 'react-redux';

const Navbar = ({ cartCount }) => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const cartLength = useSelector((state) => state.cart.cart.length)
  const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);

  console.log(cartLength)

  // Example state for the cart count
  return (
<nav className="navbar navbar-light bg-light p-3 fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img
        src={brandLogo}
        alt="Berry Kulture Brand Logo"
        className="navbar-logo"
        style={{ height: "35px", border: "solid black 1px" }}
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      onClick={toggleOffcanvas}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>

  {/* Offcanvas */}
  <div
    className={`offcanvas offcanvas-end ${offcanvasOpen ? "show" : ""}`}
    tabIndex="-1"
    id="offcanvasNavbar"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title">Berry Kulture</h5>
      <button
        type="button"
        className="btn-close"
        onClick={toggleOffcanvas}
      ></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            activeClassName="active-link"
            onClick={toggleOffcanvas}
          >
            Home
          </NavLink>
        </li>
       
        <li className="nav-item">
          <div className="dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/collections"
              role="button"
              data-bs-toggle="dropdown"
            >
              Collections
            </Link>
            <div className="dropdown-menu">
              <Link
                className="dropdown-item"
                to="/collections/kulture-jacket"
                onClick={toggleOffcanvas}
              >
                Kulture Jacket
              </Link>
              <Link
                className="dropdown-item"
                to="/collections/kulture-cargo-pants"
                onClick={toggleOffcanvas}
              >
                Kulture Cargo Pants
              </Link>
              <Link
                className="dropdown-item"
                to="/collections/kulture-2-piece"
                onClick={toggleOffcanvas}
              >
                Kulture 2 Piece
              </Link>
              <Link
                className="dropdown-item"
                to="/collections/kulture-shirt"
                onClick={toggleOffcanvas}
              >
                Kulture Shirt
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/cart"
            activeClassName="active-link"
            onClick={toggleOffcanvas}
          >
            <RiShoppingCartLine />
            {cartLength > 0 && (
              <span className="cart-count">{cartLength}</span>
            )}
          </NavLink>
        </li>
        <li className="nav-item"></li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
