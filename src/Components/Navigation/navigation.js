
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
            <span className="material-symbols-outlined">brush</span>
          </div>
          <ul className='large-screen'>
            <li><NavLink to=''>Home</NavLink></li>
            <li><NavLink to=''>About</NavLink></li>
            <li><NavLink to=''>Services</NavLink></li>
            <li><NavLink to=''>Contact</NavLink></li>
          </ul>
          <div className='nav-menu' ref={menuRef}>
            <div className="drop-btn" onClick={() => {setOpen(!open)}}>
                <span className="material-symbols-outlined">menu</span>
            </div>
            <div className={`dropdown ${open? 'show' : 'hidden'}`}>
                <ul>
                    <li><NavLink  className="white" to=''>Home</NavLink></li>
                    <li className="border-top"><NavLink className="white" to=''>About</NavLink></li>
                    <li className="border-top"><NavLink className="white" to=''>Services</NavLink></li>
                    <li className="border-top"><NavLink className="white" to=''>Contact</NavLink></li>
                </ul>
            </div>
          </div>
        </nav>
    )
};

export default Navigation;