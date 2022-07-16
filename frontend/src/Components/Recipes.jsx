import { Link } from 'react-router-dom'

import '../css/recipes.css'

export default function Recipes(props) {
    return (
        <section className="recipes">
            {props.recipes.map(
                (recipe, index) =>
                    <Recipe
                        key={recipe.id}
                        image={recipe.recipe_image}
                        name={recipe.name}
                        duration={recipe.duration}
                        difficulty={recipe.difficulty}
                        portions={recipe.portions}
                        tags={recipe.tags}
                    />
            )}
        </section>
    )
}

function Recipe(props) {
    const hour_text = props.duration[0] === 1 ? 'hour' : 'hours'
    const minute_text = props.duration[1] === 1 ? 'minute' : 'minutes'
    let duration_element

    if (props.duration[0] === 0) {
        duration_element =
            <p>Duration: <span> {props.duration[1]}</span> {minute_text}</p>
    } else if (props.duration[1] === 0) {
        duration_element =
            <p>Duration: <span> {props.duration[0]}</span> {hour_text}</p>
    } else {
        duration_element =
            <p>Duration:
                <span> {props.duration[0]}</span> {hour_text}
                <span> {props.duration[1]}</span> {minute_text}</p>
    }

    const tags_element = props.tags.map(
        (tag, index) =>
            <Link to='/tags' key={index} className='tag'>{tag}</Link >)

    return (
        <div className='recipe_content borddered_container'>
            <img
                className='recipe_image'
                src={props.image}
                alt={`Recipe: ${props.name}`} />

            <div className="recipe_info">
                <h2> <Link
                    to='/recipe'
                    className='simple_link'> {props.name} </Link></h2>
                {duration_element}
                <p>Difficulty: <span>{props.difficulty}</span> / 10</p>
                <p>Portions: <span>{props.portions}</span></p>
                <div className="tags">{tags_element}</div>
            </div>
        </div>
    )
}