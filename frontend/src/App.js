import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Navbar from "./components/Navbar"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Createblog from "./pages/Createblog"
import BlogInfo from "./pages/BlogInfo"
import Signup from "./pages/Signup";
import MyBlogs from "./pages/MyBlogs";
import UpdateBlog from "./pages/UpdateBlog";


//To start project up do the following
//cd to the backend and use: npm run dev    that line should connect to the server and the database
//cd to the frontend and use: npm start     that will start up the website itself.
//do these in 2 different terminals!!!

//to host online use a vpn (recommended) then use lt --port 8000 for backend and lt --port 3000 for frontend.
// after that you want to start the frontend and change all the api links to the url given in the backend url. then run backend.
//future note: if there is an issue with connection to mongodb atlas, either the password is incorrect, the ip isnt whitelisted OR the wifi is blocking the connection due to IP restrictions (stuff in schools or jobs thats common)
function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/login" />} 
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/myBlogs" element={<MyBlogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/createblog" element={<Createblog />} />
            <Route path="/updateBlog/:id" element={<UpdateBlog />} />
            <Route path="/blogs/:id" element={<BlogInfo />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;