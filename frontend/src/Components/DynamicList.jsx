import '../css/dynamic_list.css'

import delete_icon from '../assets/images/delete_icon.png'

export default function DynamicList(props) {
    const handle_ingredient_change = (index, event) => {
        const elements_copy = [...props.elements]
        elements_copy[index] = event.target.value
        props.set_elements(elements_copy)
    }

    const handle_new_ingredient = () => {
        let elements_copy = [...props.elements]
        elements_copy.push('')
        props.set_elements(elements_copy)
    }

    const handle_ingredient_delete = (index) => {
        if (props.elements.length > 1) {
            let elements_copy = [...props.elements]
            elements_copy.splice(index, 1)
            props.set_elements(elements_copy)
        }
    }

    return (
        <ol className='dynamic_list'>
            {props.elements.map((ingredient, index) =>
                <ListElement
                    key={index}
                    index={index}
                    value={ingredient}
                    on_change={handle_ingredient_change}
                    on_delete={handle_ingredient_delete}
                />)}

            <li key={-1}
                className='simple_link new_element'
                onClick={handle_new_ingredient}
            >Add more...</li>
        </ol>
    )
}

function ListElement(props) {
    return (
        <li>
            <div className='element_input'>
                <input
                    type='text'
                    className='form_field'
                    value={props.value}
                    onChange={(event) => props.on_change(props.index, event)} />

                <img
                    onClick={() => props.on_delete(props.index)}
                    className='delete_button'
                    src={delete_icon}
                    alt='Delete element' />
            </div>
        </li>
    )
}