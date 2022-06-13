import React, { useState } from 'react'
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import './sign-in.styles.scss'

export const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log({ email, password, event })

    }

    const handleChange = event => {
        const { value, name } = event.target;
        console.log({ value, name })
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
            <CustomButton type="submit" handleSubmit={handleSubmit}>Sign in</CustomButton>
        </form>

    </div>)
}