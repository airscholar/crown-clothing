import React, { useState } from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import { auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

export const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        let user;
        try {
            user = await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
            // console.log('error logging in', err.message)
        }

        if (!user) {
            return alert('Invalid credentials')
        }

        alert('Tada! You are logged in!')

        console.log({ user })
    }

    const handleChange = event => {
        const { value, name } = event.target;

        const state = {
            email: () => (
                setEmail(value)
            ),
            password: () => (
                setPassword(value)
            )
        }

        return state[name]();
    }

    return (<div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
            <FormInput label="Email" name="email" type="email" value={email} handleChange={handleChange} required />
            <FormInput label="Password" name="password" type="password" value={password} handleChange={handleChange} required />

            <div className='buttons'>
                <CustomButton style={{ "marginRight": "10px" }} type="submit" onClick={handleSubmit}>Sign in</CustomButton>
                <CustomButton type='button' isGoogleSignin onClick={signInWithGoogle}>Sign in with google</CustomButton>
            </div>
        </form>

    </div>)
}