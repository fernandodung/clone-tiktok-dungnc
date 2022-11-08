import {HeaderOnly} from '../components/Layout'
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"

const publicRoute = [
    {path: '/', component: Home},
    {path: '/follow', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, Layout : HeaderOnly},
]

const privateRoute = [

]

export {publicRoute, privateRoute}