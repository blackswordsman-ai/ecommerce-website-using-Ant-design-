import React from 'react';
import { 
  MailOutlined,
  MobileOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import './AppHeader.css';

const { Text } = Typography;

function AppHeader() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="tel:+918330064123" className="contact-link">
              <MobileOutlined />
              <Text style={{ color: 'inherit' }}>+918330064123</Text>
            </a>
            <a href="mailto:grocery@gmail.co.uk" className="contact-link">
              <MailOutlined />
              <Text style={{ color: 'inherit' }}>grocery@gmail.co.uk</Text>
            </a>
          </div>

          <div className="other-info">
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FacebookFilled />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <TwitterOutlined />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <InstagramFilled />
              </a>
            </div>
            <a href="/account" className="account-button">
              <UserOutlined />
              <span>My Account</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="main-header">
          <div className="logo">FreshGrocer</div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="search-input"
            />
            <button className="search-button">
              <SearchOutlined />
            </button>
          </div>

          <button className="cart-button">
            <ShoppingCartOutlined />
            <span>Cart (0)</span>
          </button>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/deals" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Deals
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;