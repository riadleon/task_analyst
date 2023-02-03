import React from 'react';
import { Link } from 'react-router-dom';
const User = ({ ourUser }) => {
    console.log(ourUser);
    const { id, name, address, company } = ourUser;
    return (
        <div className='table-responsive'>
            <table className="table table-borderless align-middle bg-white rounded">
                <thead className='text-center'>
                    <tr className='py-4'>
                        <th scope="col">COMPANY NAME</th>
                        <th scope="col">CONTACT</th>
                        <th scope="col">CITY</th>
                        <th scope="col">STREET</th>
                        <th scope="col">DETAILS</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr>
                        <td>{company.name}</td>
                        <td>{name}</td>
                        <td>{address.city}</td>
                        <td>{address.street}</td>
                        <td><Link to={`/users/${id}`} className='btn btn-danger'>View Details</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default User;