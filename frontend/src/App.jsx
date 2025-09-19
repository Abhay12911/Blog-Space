
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profiles'
import {  UserContextProvider } from './context/UserContext'
import MyBlogs from './pages/MyBlogs'



const App = () => {


  
  return (
    <div className='bg-gradient-to-b from-black to-blue-500 bg-cover w-full h-screen 
bg-inherit mix-blend-normal'>
      <UserContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/write" element={<CreatePost/>}/>
      <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
      <Route exact path="/edit/:id" element={<EditPost/>}/>
      <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
      <Route exact path="/profile/:id" element={<Profile/>}/>
      </Routes>
    
      </UserContextProvider>
      </div>
  )
}

export default App