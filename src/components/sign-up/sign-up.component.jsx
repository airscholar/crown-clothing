
import React, { useState } from 'react';
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component'
import { auth } from '../../firebase/firebase.utils'
import { createUserProfileDocument } from '../../firebase/user.firebase'

import './sign-up.styles.scss';

export const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            resetState();

        } catch (error) {
            console.error(error)
        }
    }

    const resetState = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    const handleChange = async (event) => {
        const { name, value } = event.target;
        const state = {
            displayName: () => (
                setDisplayName(value)
            ),
            email: () => (
                setEmail(value)
            ),
            password: () => (
                setPassword(value)
            ),
            confirmPassword: () => (
                setConfirmPassword(value)
            )
        }

        return state[name]();
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form'>
                <FormInput type='text' name='displayName'
                    value={displayName} onChange={handleChange}
                    label='Display Name' required></FormInput>
                <FormInput type='email' name='email'
                    value={email} onChange={handleChange}
                    label='Email'></FormInput>
                <FormInput type='password' name='password'
                    value={password} onChange={handleChange}
                    label='Password' required></FormInput>
                <FormInput type='password' name='confirmPassword'
                    value={confirmPassword} onChange={handleChange}
                    label='Confirm Password' required></FormInput>
            </form>

            <CustomButton type='submit' onClick={handleSubmit}>Register</CustomButton>
        </div >
    )
}