import React, { Component } from 'react';
import '../styles/contact.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Contact extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="address1">Farmers Alliance Store</div>
        <div className="address2">134 South Chatham Avenue</div>
        <div className="address3">Siler City, NC  27344</div>
      <Footer />
      </div>
    );
  }
}

export default Contact;
