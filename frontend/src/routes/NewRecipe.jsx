import { useState } from 'react'

import '../css/globals.css'
import '../css/new_recipe.css'

import delete_icon from '../assets/images/delete_icon.png'

export default function AddRecipe() {
    return (
        <div className='new_recipe_content'>
            <h1>Post new recipe</h1>

            <div className='form_container'>
                <RecipeForm />
            </div>
        </div>
    )
}

function RecipeForm() {
    const [ingredients, set_ingredients] = useState([''])

    return (
        <form className='recipe_form'>
            <fieldset className='borddered_container'>
                <legend><h2>Ingredients</h2></legend>
                <IngredientList
                    ingredients={ingredients}
                    set_ingredients={set_ingredients} />
            </fieldset>

            <input type='button' value='submit' onClick={() => console.log(ingredients)} />
        </form>)
}

function IngredientList(props) {
    const handle_ingredient_change = (index, event) => {
        const ingredients_copy = [...props.ingredients]
        ingredients_copy[index] = event.target.value
        props.set_ingredients(ingredients_copy)
    }

    const handle_new_ingredient = () => {
        let ingredients_copy = [...props.ingredients]
        ingredients_copy.push('')
        props.set_ingredients(ingredients_copy)
    }


    const handle_ingredient_delete = (index) => {
        if (props.ingredients.length > 1) {
            let ingredients_copy = [...props.ingredients]
            ingredients_copy.splice(index, 1)
            props.set_ingredients(ingredients_copy)
        }
    }

    return (
        <ol className='ingredient_list'>
            {props.ingredients.map((ingredient, index) =>
                <Ingredient
                    key={index}
                    index={index}
                    value={ingredient}
                    on_change={handle_ingredient_change}
                    on_delete={handle_ingredient_delete}
                />)}

            <li key={-1}
                className='simple_link new_ingredient'
                onClick={handle_new_ingredient}
            >New ingredient...</li>
        </ol>
    )
}

function Ingredient(props) {
    return (
        <li>
            <div className='ingredient_input'>
                <input
                    type='text'
                    className='form_field'
                    value={props.value}
                    onChange={(event) => props.on_change(props.index, event)} />

                <img
                    onClick={() => props.on_delete(props.index)}
                    className='delete_button'
                    src={delete_icon}
                    alt='Delete ingredient' />
            </div>
        </li>
    )
}