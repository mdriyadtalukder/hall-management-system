import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const User = () => {
    const [da, setDa] = useState([]);
    const [reload, setReload] = useState(true);;
    useEffect(() => {
        fetch("https://hall-management-system-server.onrender.com/user")
            .then(res => res.json())
            .then(data => {
                setDa(data);
                setReload(false)
            })
    }, [da])
    let c = 1;
    return (
        <>
            {
                reload ? <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Spinner animation="border" variant="info" />
                </div> :

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                da.map(d => <tr>
                                    <td>{c++}</td>
                                    <td>{d?.name}</td>
                                    <td>{d?.email}</td>
                                    <td>{d?._id}</td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
            }

        </>
    );
};

export default User;