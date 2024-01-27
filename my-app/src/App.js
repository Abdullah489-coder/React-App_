import './App.css'
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import  Blogs from './Pages/Blogs.js'
import  AuthorPage from './Pages/Authorpage.js'
import  Home from './Pages/Home.js'
import Contact from './Pages/Contact.js'
import Blog1 from './Pages/Blog1.js' 
import {
Routes,
Route
} from 'react-router-dom';

function App() {
  return (
 <>
    
    
    <Navbar/> 
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/Blogs' element={<Blogs />} />
<Route path='/Blog1' element={<Blog1 />} />

<Route path='/AuthorPage' element={<AuthorPage />} />
<Route path='/Contact' element={<Contact />} />
</Routes>

   

<Footer/>
</>

  );
}

export default App;
