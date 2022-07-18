import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Login from './routes/Login'
import ResetPassword from './routes/ResetPassword'
import Register from './routes/Register'
import NavBar from './routes/NavBar'
import Profile from './routes/Profile'
import NewRecipe from './routes/NewRecipe'
import Newsfeed from './routes/Newsfeed'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/new_recipe' element={<NewRecipe />} />
                <Route path='/newsfeed' element={<Newsfeed />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/reset_password' element={<ResetPassword />} />
            <Route path='/register' element={<Register />} />

        </Routes>
    </BrowserRouter>
)
