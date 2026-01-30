import React, { useState } from 'react';
import { 
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Typography, Input, Button, Badge, Space, Divider, Dropdown, Drawer } from 'antd';
import { useCart } from '../../context/CartContext';

import './Header.css';

const { Text } = Typography;

function Header() {
  const { cartCount } = useCart();
  const [visible, setVisible] = useState(false);

  const accountMenuItems = [
    { key: '1', label: <NavLink to="/profile">My Profile</NavLink> },
    { key: '2', label: <NavLink to="/orders">My Orders</NavLink> },
    { key: '3', divider: true },
    { key: '4', label: 'Logout', danger: true },
  ];

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop All" },
    { to: "/categories", label: "Categories" },
    { to: "/deals", label: "Hot Deals" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
    { to: "/admin/products", label: "Admin" },
  ];

  return (
    <header className="main-header-wrapper">
      {/* ... Top Mini Bar (unchanged) ... */}
      <div className="top-mini-bar">
        <div className="container flex-between">
          <div className="top-left">
            <Space size="large" split={<Divider type="vertical" />}>
              <a href="tel:+918330064123" className="top-link">
                <PhoneOutlined /> <Text className="top-text">+91 83300 64123</Text>
              </a>
              <a href="mailto:support@freshgrocer.com" className="top-link">
                <MailOutlined /> <Text className="top-text">support@freshgrocer.com</Text>
              </a>
            </Space>
          </div>
          <div className="top-right">
            <Space size="middle">
              <div className="social-links-minimal">
                <a href="https://facebook.com" className="social-icon-top" target="_blank" rel="noopener noreferrer"><FacebookFilled /></a>
                <a href="https://twitter.com" className="social-icon-top" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
                <a href="https://instagram.com" className="social-icon-top" target="_blank" rel="noopener noreferrer"><InstagramFilled /></a>
              </div>

              <Divider type="vertical" />
              <Text className="top-text highlight">Free Shipping on orders over $50!</Text>
            </Space>
          </div>
        </div>
      </div>

      {/* Main Branding & Search Header */}
      <div className="middle-header">
        <div className="container flex-between">
          <NavLink to="/" className="branding">
            <span className="brand-dot"></span>
            <span className="brand-name">Fresh<span className="accent">Grocer</span></span>
          </NavLink>
          
          <div className="header-search-box">
            <Input 
              placeholder="Search for groceries, fruits, vegetables..." 
              prefix={<SearchOutlined className="search-icon-dim" />}
              className="premium-search-input"
              size="large"
            />
          </div>

          <div className="user-action-group">
            <Space size="large">
              <Dropdown menu={{ items: accountMenuItems }} placement="bottomRight" arrow>
                <div className="action-item">
                  <Badge dot status="processing">
                    <UserOutlined className="action-icon" />
                  </Badge>
                  <Text className="action-label">Account</Text>
                </div>
              </Dropdown>
              
              <NavLink to="/cart" className="action-item">
                <Badge count={cartCount} size="small" offset={[5, 0]}>
                  <ShoppingCartOutlined className="action-icon" />
                </Badge>
                <Text className="action-label">Cart</Text>
              </NavLink>
              
              <Button 
                type="text" 
                className="mobile-menu-trigger" 
                icon={<MenuOutlined />} 
                onClick={() => setVisible(true)}
              />
            </Space>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={280}
      >
        <ul className="mobile-nav-list">
          {menuLinks.map(link => (
            <li key={link.to}>
              <NavLink 
                to={link.to} 
                className={({isActive}) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}
                onClick={() => setVisible(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Drawer>

      {/* Main Navigation Bar */}
      <nav className="bottom-nav">
        <div className="container">
          <ul className="nav-menu-list">
            {menuLinks.map(link => (
              <li key={link.to}>
                <NavLink to={link.to} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;