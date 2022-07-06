import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import '../css/globals.css'
import '../css/navbar.css'
import logo_image from '../assets/images/logo_no_text_50.png'
import notification_icon from '../assets/images/notification.png'
import message_icon from '../assets/images/message.png'
import avatar_image from '../assets/images/avatar_50.jpg'


export default function NavBar() {
    const [search, set_search] = useState('')

    return (
        <div>
            <nav className='navbar'>
                <Link
                    to='/newsfeed'
                    className='newsfeed_link'
                ><img src={logo_image} alt='logo' /></Link>

                <input
                    type='text'
                    className='form_field'
                    placeholder='Search'
                    value={search}
                    onChange={event => set_search(event.target.value)} />

                <div className="icons">
                    <img src={notification_icon} alt='notification icon' />
                    <img src={message_icon} alt='message icon' />
                </div>

                <Link
                    to='/profile'
                    className='profile_link'
                ><img src={avatar_image} alt='avatar image' /></Link>
            </nav>

            <Outlet />
        </div>
    )
}
