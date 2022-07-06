import '../css/profile.css'

import profile_photo from '../assets/images/avatar_150.jpg'

export default function Profile() {
    return (
        <div className='container'>
            <ProfileHeader />
        </div>
    )
}

function ProfileHeader() {
    const user_info = {
        profile_photo: profile_photo,
        name: 'Ricardo',
        last_name: 'Gatgens Rodriguez',
        followers: 0,
        following: 0,
        recipes: 0
    }

    return (
        <header className='profile_header'>
            <img
                className='profile_photo'
                src={user_info.profile_photo}
                alt='profile photo' />

            <div className="user_info">
                <h1>{user_info.name} {user_info.last_name}</h1>

                <div className="info_container">
                    <div>
                        <p className='dark_turquoise_font'>{user_info.followers}</p>
                        <p>Followers</p>
                    </div>

                    <div>
                        <p className='dark_turquoise_font'>{user_info.following}</p>
                        <p>Following</p>
                    </div>

                    <div>
                        <p className='dark_turquoise_font'>{user_info.recipes}</p>
                        <p>Recipes</p>
                    </div>
                </div>
            </div>
        </header >
    )
}