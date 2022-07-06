import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Login from './routes/Login'
import ResetPassword from './routes/ResetPassword'
import Register from './routes/Register'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/reset_password' element={<ResetPassword />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
)
