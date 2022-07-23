import { useState, useRef } from 'react';

import '../css/globals.css'
import '../css/image_uploader.css'

export default function ImageUploader(props) {
    const [image, set_image] = useState(props.default_image)
    const image_input = useRef(null)

    const handle_button_click = () => image_input.current.click()

    const handle_image_change = (event) => {
        const new_image = event.target.files[0]

        URL.revokeObjectURL(props.image_url)
        const new_image_url = URL.createObjectURL(new_image)


        set_image(new_image_url)
        props.set_image_url(new_image_url)
    }

    return (
        <div className="image_uploader" onClick={handle_button_click}>
            <img
                src={image}
                alt="recipe"
                className='image' />

            <span className='uploader_text'>Upload an image</span>

            <input
                type="file"
                accept='image/*'
                ref={image_input}
                className='hidden_element'
                onChange={(event) => handle_image_change(event)} />
        </div>
    )
}