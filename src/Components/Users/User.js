import React from 'react';
import { Link } from 'react-router-dom';
const User = ({ ourUser }) => {
    console.log(ourUser);
    const { id, name, address, company } = ourUser;
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                       
                            <table className="table table-borderless align-middle bg-white rounded">
                                <thead className='text-center'>
                                    <tr className='py-4'>
                                        <th scope="col"></th>
                                        <th scope="col">CONTACT</th>
                                        <th scope="col">CITY</th>
                                        <th scope="col">STREET</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <td>{company.name}</td>
                                        <td>{name}</td>
                                        <td>{address.city}</td>
                                        <td>{address.street}</td>
                                        <td><Link to={`/users/${id}`} className="px-8 py-3 font-semibold rounded-full text-white hover:text-black bg-red-500 no-underline">View Details</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;

