import React from 'react';
import { Button, Container } from 'react-bootstrap';
import image from '../../assests/image/banner-image.webp'
import image2 from '../../assests/image/Multi-browser.png'
import image3 from '../../assests/image/arrow.svg'
import image4 from '../../assests/image/Trusted-By-New-Update.webp'
const Banner = () => {
    return (
        <div>
            <div className='bg-dark text-white'>
                <Container className='py-4'>
                    <div className='text-center py-4'>
                        <h1>Find Your Next <span className='text-warning'>Prospect</span> </h1>
                        <h5 className='mb-5'>The Most Intelligent AI Powered Real-Time Lead Generation Engine</h5>
                        <Button variant="warning">Get Started With A Demo</Button>
                    </div>
                    <div>
                        <img className='img-fluid mt-4' src={image} alt="" />
                    </div>
                </Container>
            </div>

            <div className='bg-light text-black'>
                <Container className='py-4'>
                    <div className='text-center py-4'>
                        <h1>Turn Browsing Into Lead Generation</h1>
                        <p className='mb-5'>We’re constantly working, even when you aren’t. Our AI based engine continuously scours through 100s of data sources to generate quality leads, all while you browse at your leisure.</p>
                    </div>
                    <div>
                        <img className='img-fluid mt-4 d-block mx-auto' src={image2} alt="" />
                        <img className='img-fluid mt-4 d-block mx-auto' src={image3} alt="" />

                    </div>
                </Container>
            </div>

            <div className='bg-white text-black'>
                <Container className='py-4'>
                    <div className='text-center py-4'>
                        <h1>Trusted By</h1>
                    </div>
                    <div>
                        <img className='img-fluid my-4 d-block mx-auto' src={image4} alt="" />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;