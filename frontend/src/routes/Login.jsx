import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/globals.css'
import '../css/login.css'

import logo_image from '../assets/images/logo_250.png'

export default function Login() {
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    return (
        <div className='login_content'>
            <img src={logo_image} alt='logo' />

            <div className='form_container'>
                <LoginForm
                    email={email}
                    password={password}
                    onEmailChange={set_email}
                    onPasswordChange={set_password} />

                <MoreOptions />
            </div>
        </div>
    )
}

function LoginForm(props) {
    return (
        <form className='login_form'>
            <input
                id='email_input'
                className='form_field'
                type='email'
                placeholder='E-mail'
                name='email'
                value={props.email}
                onChange={event => props.onEmailChange(event.target.value)} />

            <input
                id='password_input'
                className='form_field'
                type='password'
                placeholder='Password'
                name='email'
                value={props.password}
                onChange={event => props.onPasswordChange(event.target.value)} />

            <input
                className='button red_bg'
                type='button'
                value='Log in'
                onClick={() => send_login_info(props.email, props.password)} />
        </form>
    )
}

function MoreOptions() {
    return (
        <div className='more_options'>
            <Link
                to='/reset_password'
                className='simple_link'>Forgot password?</Link>
            <Link to='/register'
                className='simple_link'>Register</Link>
        </div>
    )
}

function send_login_info(email, password) {
    console.log(email)
    console.log(password)
}