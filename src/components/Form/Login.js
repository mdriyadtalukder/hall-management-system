import React, { useRef } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const Login = () => {
    const emailInput = useRef('');
    const passwordInput = useRef('');
    const navigate = useNavigate();
    let location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    let errors;
    if (error || error1) {
        errors = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || sending) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="info" />
        </div>

    }
    if (user) {
        navigate(from, { replace: true });
    }
    const login = event => {
        event.preventDefault();
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        signInWithEmailAndPassword(email, password);

    }
    const forgetPassword = async () => {
        const email = emailInput.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent email');
        }
        else {
            toast('please enter your email');

        }
    }
    return (
        <div id='login-form' className='w-25 p-5 shadow-lg mx-auto mt-5 rounded mb-5'>
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordInput} type="password" placeholder="Password" />
                </Form.Group>
                {errors}
                <button className=' btn login-btn w-100'>Log In</button>
                <div className="text-center pt-2">
                    <button onClick={forgetPassword} className='forget btn'>Forget password?</button>
                </div>
                <p className='text-center' >Are you new? <Link to='/signup' style={{ color: '#1CB0E6' }} className='text-decoration-none'>Please sign up </Link></p>
            </Form>
            <ToastContainer ></ToastContainer>
        </div>
    );
};
export default Login;