import Login from "./login";
import { useState } from "react";
import Register from "./signup";
import Banner from './Banner'

import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/nav.css'
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import AboutUsPage from "./about";
import ContactUsPage from "./contact";


function Home()
{
    const [cart, updateCart] = useState([])
    return(
        <div style={{
            backgroundColor:'lightblue',
            
            
            
            width:'100%'
            
        }}>
            
             <Banner>
				
				<h1 className='lmj-title'>Welcome to the Jungle House</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div> 
        </div>
    )
}
function Navbar()
{
    return (
        <Router>
            <header className="container">
            <nav style={{
                width:'100%',
                height:'40px',
                marginBottom:'2px',
            
            }}>
                <ul>
                    <li className='active'><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/login' className='link'>LOGIN</Link></li>
                    <li ><Link to='/register'className='link'>REGISTER</Link></li>
                    <li ><Link to='/about'className='link'>ABOUT</Link></li>
                    <li ><Link to='/contact us'className='link'>CONTACT US</Link></li>

                </ul>
            </nav>
            </header>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                
                <Route exact path='/Register' element={<Register/>} />
            <Route exact path='/Login' element={<Login/>} />
            <Route exact path='/about' element={<AboutUsPage/>} />
            <Route exact path='/contact us' element={<ContactUsPage/>} />
            </Routes>
        </Router>
    )
}
export default Navbar;