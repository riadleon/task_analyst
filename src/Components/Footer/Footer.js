import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import image from '../../assests/image/footer-logo.png'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-dark'>
            <Container>
                <Row className="text-md-left text-white align-items-center">
                    <Col md={3} sm={12} className="my-3">
                        <img className='w-75' src={image} alt="" />
                        <p>Leadzen.ai is the most intelligent lead generation tool that integrates artificial intelligence to provide real-time updates in the prospecting process.</p>
                        <Row>
                            <Col className="my-3">
                                <a href="#">
                                    <FaFacebookSquare
                                        size={36}
                                        style={{ backgroundColor: "#3b5998", color: "#fff", padding: "10px", borderRadius: "50%" }}
                                    />
                                </a>
                            </Col>
                            <Col className="my-3">
                                <a href="#">
                                    <FaTwitterSquare
                                        size={36}
                                        style={{ backgroundColor: "#00acee", color: "#fff", padding: "10px", borderRadius: "50%" }}
                                    />
                                </a>
                            </Col>
                            <Col className="my-3">
                                <a href="#">
                                    <FaInstagram
                                        size={36}
                                        style={{ backgroundColor: "#e1306c", color: "#fff", padding: "10px", borderRadius: "50%" }}
                                    />
                                </a>
                            </Col>
                            <Col className="my-3">
                                <a href="#">
                                    <FaLinkedin
                                        size={36}
                                        style={{ backgroundColor: "#0e76a8", color: "#fff", padding: "10px", borderRadius: "50%" }}
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} sm={6} className="my-3">
                        <h3>leadzen.ai</h3>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link className='text-white text-decoration-none' to='/'>Why Us</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>Pricing</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>Contact Us</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>Book a Demo</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6} className="my-3">
                        <h3>leadzen.ai For</h3>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link className='text-white text-decoration-none' to='/'>Sales</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>Marketing</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>Talent Acquisition</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>So much more</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6} className="my-3">
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link className='text-white text-decoration-none' to='/'>About</Link></li>
                            <li><Link className='text-white text-decoration-none' to='/'>Blogs</Link></li>
                        </ul>
                    </Col>
                </Row>
                <p className='text-center text-white py-4'>© 2023 Leadzen.ai | All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;