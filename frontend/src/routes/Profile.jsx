import Recipes from '../Components/Recipes'

import '../css/profile.css'

import profile_photo from '../assets/images/avatar_150.jpg'
import recipe_image from '../assets/images/recipe.jpg'

const recipe_1_info = {
    recipe_image: recipe_image,
    name: 'Recipe name',
    duration: [0, 30],
    difficulty: 2,
    portions: 3,
    tags: ['Vegan', 'Single', 'Easy', 'Fast']
}
const recipe_2_info = {
    recipe_image: recipe_image,
    name: 'Recipe long name',
    duration: [1, 1],
    difficulty: 6,
    portions: 5,
    tags: ['Carnivorous', 'Family', 'Hard', 'Fast']
}
const recipe_3_info = {
    recipe_image: recipe_image,
    name: 'Recipe long long long name',
    duration: [2, 0],
    difficulty: 8,
    portions: 10,
    tags: ['Carnivorous', 'Family', 'Hard', 'Long']
}

const recipes = [
    recipe_1_info,
    recipe_2_info,
    recipe_3_info]

export default function Profile() {
    return (
        <div className='container profile_content'>
            <ProfileHeader />

            <button
                className='button turquoise_bg'
                onClick={(() => console.log('new recipe'))}
            >Add recipe</button>

            <Recipes recipes={recipes} />
        </div >
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
        <header className='borddered_container'>
            <img
                className='profile_photo'
                src={user_info.profile_photo}
                alt='profile' />

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