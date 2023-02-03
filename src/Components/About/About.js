import React from 'react';
import { Button, Container } from 'react-bootstrap';
import image from '../../assests/image/about.png'
const About = () => {
    return (
        <div className='bg-warning'>
            <Container>
                <div className='d-lg-flex justify-content-between mb-4'>
                    <div className='py-4'>
                        <h1>About Us</h1>
                        <p>Leadzen.ai is the most intelligent prospecting tool in today’s digital world. Our AI-powered real-time engine doesn’t just track, collate and disseminate data to you, it also helps you leverage that data in the most efficient way possible.<br/>It's lead generation and lead acquisition, through leading AI technology</p>
                        <Button variant="secondary">Get Started With a Demo</Button>
                    </div>
                    <div>
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;