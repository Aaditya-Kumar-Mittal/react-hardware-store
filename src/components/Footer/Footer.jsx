import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="build"> </ion-icon>
                  <h1>Raj Ply House</h1>
              </div>
              <p>Welcome to Raj Plyhouse, your trusted destination for high-quality hardware tools and materials. 
                We offer a wide range of products to meet all your home improvement, construction, and DIY needs. 
                Whether you're a professional or a DIY enthusiast, our products are designed to provide durability,
                 reliability, and performance. Shop with us for top-notch tools, expert advice, and exceptional customer service!</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Our Stores</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Raj Ply House, Ahiyapur, Muzffarpur, Bihar</li>
                <li>Email: rajplyhouse7@gmail.com</li>
                <li>Phone: +9174856 07651</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
