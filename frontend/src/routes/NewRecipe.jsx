import { useState } from 'react'

import ImageUploader from '../Components/ImageUploader'
import DynamicList from '../Components/DynamicList'

import upload_image from '../assets/images/camera_icon.png'

import '../css/globals.css'
import '../css/new_recipe.css'


export default function AddRecipe() {
    return (
        <div className='new_recipe_content'>
            <h1>Post new recipe</h1>

            <NewRecipeForm />
        </div>
    )
}

function NewRecipeForm() {
    const [image_url, set_image_url] = useState('')
    const [overview, set_overview] = useState({
        name: '',
        type: '',
        portions: 0,
        duration: [0, 0],
        difficulty: 0
    })
    const [ingredients, set_ingredients] = useState([''])
    const [instructions, set_instructions] = useState([''])

    const handle_submit = () => {
        console.log('image url:\n', image_url)
        console.log('overview:', overview)
        console.log('ingredients:\n', ingredients)
        console.log('instructions:\n', instructions)
    }

    return (
        <form className='form_container recipe_form'>
            <div className="recipe_image">
                <ImageUploader
                    className='recipe_image'
                    default_image={upload_image}
                    image_url={image_url}
                    set_image_url={set_image_url} />
            </div>

            <fieldset className='borddered_container'>
                <legend><h2>Details</h2></legend>
                <RecipeDetails
                    overview={overview}
                    set_overview={set_overview} />
            </fieldset>

            <fieldset className='borddered_container'>
                <legend><h2>Ingredients</h2></legend>
                <DynamicList
                    elements={ingredients}
                    set_elements={set_ingredients} />
            </fieldset>

            <fieldset className='borddered_container'>
                <legend><h2>Instructions</h2></legend>
                <DynamicList
                    elements={instructions}
                    set_elements={set_instructions} />
            </fieldset>

            <input
                type='button'
                value='Post recipe'
                className='button turquoise_bg post_recipe_button'
                onClick={handle_submit} />
        </form>)
}

function RecipeDetails(props) {
    const handle_name_change = (event) => {
        const new_name = event.target.value

        let overview_copy = { ...props.overview }
        overview_copy.name = new_name

        props.set_overview(overview_copy)
    }

    const handle_type_change = (event) => {
        const new_type = event.target.value

        let overview_copy = { ...props.overview }
        overview_copy.type = new_type

        props.set_overview(overview_copy)
    }

    const handle_portions_change = (event) => {
        const new_portions = event.target.value

        let overview_copy = { ...props.overview }
        overview_copy.portions = new_portions

        props.set_overview(overview_copy)
    }

    const handle_duration_hours_change = (event) => {
        const new_duration_hours = parseInt(event.target.value)

        let overview_copy = { ...props.overview }
        overview_copy.duration[0] = new_duration_hours

        props.set_overview(overview_copy)
    }

    const handle_duration_minutes_change = (event) => {
        const new_duration_minutes = parseInt(event.target.value)

        let overview_copy = { ...props.overview }
        overview_copy.duration[1] = new_duration_minutes

        props.set_overview(overview_copy)
    }

    const handle_difficulty_change = (event) => {
        const new_difficulty = parseInt(event.target.value)

        let overview_copy = { ...props.overview }
        overview_copy.difficulty = new_difficulty

        props.set_overview(overview_copy)
    }

    return (
        <div className='recipe_details'>
            <label className='detail'>
                <span>Recipe name:</span>
                <input
                    type='text'
                    className='form_field'
                    onChange={(event) => handle_name_change(event)}
                />
            </label>

            <label className='detail'>
                <span>Recipe type:</span>
                <select
                    type='select'
                    className='form_field form_select'
                    defaultValue='main'
                    onChange={(event) => handle_type_change(event)}>
                    <option
                        value='main'
                        disabled>-- Select a type --</option>
                    <option value='breakfast'>Breakfast</option>
                    <option value='brunch'>Brunch</option>
                    <option value='lunch'>Lunch</option>
                    <option value='dinner'>Dinner</option>
                    <option value='dinner'>Dessert</option>
                </select>
            </label>

            <label className='detail'>
                <span>Portions:</span>
                <input
                    type='number'
                    min={1}
                    max={15}
                    defaultValue={1}
                    className='form_field'
                    onChange={(event) => handle_portions_change(event)}
                />
            </label>

            <label className='detail'>
                <span>Difficulty:</span>
                <input
                    type='number'
                    min={1}
                    max={10}
                    defaultValue={1}
                    className='form_field'
                    onChange={(event) => handle_difficulty_change(event)}
                />
            </label>

            <div className='detail'>
                <span>Duration:</span>
                <div className="duration">
                    <label>
                        <input
                            type='number'
                            min={0}
                            max={24}
                            defaultValue={0}
                            className='form_field'
                            onChange={(event) => handle_duration_hours_change(event)}
                        />
                        <span> hour(s)</span>
                    </label>
                    <label >
                        <input
                            type='number'
                            min={0}
                            max={59}
                            defaultValue={0}
                            className='form_field'
                            onChange={(event) => handle_duration_minutes_change(event)}
                        />
                        <span> minute(s)</span>
                    </label>
                </div>

            </div>
        </div>
    )
}