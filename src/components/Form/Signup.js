import axios from 'axios';
import React, { useRef } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './style.css'
const Signup = () => {
    const emailInput = useRef('');
    const nameInput = useRef('');
    const passwordInput = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    let errors;
    if (error || error1) {
        errors = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (loading || updating) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="info" />
        </div>

    }
    if (user) {
        navigate('/');
    }
    const signup = async (event) => {
        event.preventDefault();
        const email = emailInput.current.value;
        const name = nameInput.current.value;
        const password = passwordInput.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        const users = {
            name: name,
            email: email,
        }
        axios.post('https://hall-management-system-server.onrender.com/user', users)
            .then(res => {
                console.log(res)
            })


    }
    return (
        <div id='signup-form' className='w-25 p-5 shadow-lg mx-auto mt-5 rounded mb-5'>
            <Form onSubmit={signup} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control ref={nameInput} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordInput} type="password" placeholder="Password" />
                </Form.Group>
                {errors}
                <button className='btn signup-btn w-100'>Sign Up</button>
                <p className='pt-4'>Already have an account? <Link to='/login' style={{ color: '#1CB0E6' }} className='text-decoration-none'>Please log in </Link></p>
            </Form>
        </div>
    );
};

export default Signup;