
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


function Navigation() {
const [open, setOpen] = useState(false);

let menuRef = useRef();

useEffect(() => {
    let handler = (e) => {
        if(!menuRef.current.contains(e.target)) {
            setOpen(false);
        }  
    };

    document.addEventListener('mousedown', handler);

    return () => {
        document.removeEventListener('mousedown', handler);
    }
})

    return (
        <nav>
          <div>
            <NavLink to='/'><img className="logo" src="https://i.imgur.com/jpeRzN0.jpg" alt="ideal painting logo" /></NavLink>
          </div>
          <ul className='large-screen'>
            <li><NavLink className='charcoal didot' to='/'>Home</NavLink></li>
            <li><NavLink className='charcoal didot' to='/about'>About</NavLink></li>
            <li><NavLink className='charcoal didot' to='/services'>Services</NavLink></li>
            <li><NavLink className='charcoal didot' to='/contact'>Contact</NavLink></li>
          </ul>
          <div className='small-screen' ref={menuRef}>
            <div className="drop-btn" onClick={() => {setOpen(!open)}}>
                <span className="material-symbols-outlined">menu</span>
            </div>
            <div className={`dropdown ${open? 'show' : 'hidden'}`}>
                <ul>
                    <li><NavLink onClick={() => {setOpen(!open)}}  className="white" to='/'>Home</NavLink></li>
                    <li className="border-top"><NavLink onClick={() => {setOpen(!open)}} className="white link" to='/about'>About</NavLink></li>
                    <li className="border-top"><NavLink onClick={() => {setOpen(!open)}} className="white link" to='/services'>Services</NavLink></li>
                    <li className="border-top"><NavLink onClick={() => {setOpen(!open)}} className="white link" to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
          </div>
        </nav>
    )
};

export default Navigation;