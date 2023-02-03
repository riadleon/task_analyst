import React from 'react';
import {Container } from 'react-bootstrap';
import {Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <Container className='my-3'>
                <table className="table table-light border">
                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">CONTACT</th>
                            <th scope="col">CITY</th>
                            <th scope="col">STREET</th>
                            <th scope="col">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{details.company.name}</td>
                            <td>{details.name}</td>
                            <td>{details.address.city}</td>
                            <td>{details.address.street}</td>
                            <td><Link to='/users' className='btn btn-danger'>Hide Details</Link></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h1>Description</h1>
                    <p>Our Company name is {details.company.name}. It is {details.company.catchPhrase} and {details.company.bs}.</p>
                    <div className='d-lg-flex justify-content-between'>
                        <div>
                            <b>Contact Person</b>
                            <p>{details.name}</p>
                            <b>Desination</b>
                            <p>{details.company.bs}</p>
                            <b>Email</b>
                            <p>{details.email}</p>
                            <b>Phone</b>
                            <p>{details.phone.split(" x")[0]}</p>
                        </div>
                        <div>
                            <b>Address</b>
                            <p>{details.address.street}</p>
                            <b>City</b>
                            <p>{details.address.city}</p>
                            <b>Country</b>
                            <p>India</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UserDetails;