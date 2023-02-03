import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import './Users.css'
const Users = () => {
    const ourUsers = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(3);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = ourUsers.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(ourUsers.length / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <Container className='my-3 bg-light p-4 rounded'>
                {
                    currentData.map(ourUser => <User
                        key={ourUser.id}
                        ourUser={ourUser}
                    ></User>)
                }
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                            <span style={{ cursor: 'pointer' }} className="page-link" onClick={() => paginate(currentPage - 1)}>
                                &lt;
                            </span>
                        </li>
                        {pageNumbers.map((number) => (
                            <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
                                <span style={{ cursor: 'pointer' }} onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </span>
                            </li>
                        ))}
                        <li className={currentPage === pageNumbers.length ? "page-item disabled" : "page-item"}>
                            <span style={{ cursor: 'pointer' }} className="page-link" onClick={() => paginate(currentPage + 1)}>
                                &gt;
                            </span>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    );
};

export default Users;