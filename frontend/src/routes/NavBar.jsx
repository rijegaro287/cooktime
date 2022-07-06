import { Outlet } from "react-router-dom"
import '../css/globals.css'
import '../css/navbar.css'

export default function NavBar() {
    return (
        <div>
            <h1>NavBar</h1>

            <Outlet />
        </div>
    )
}
