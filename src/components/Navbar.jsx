import './navbar.css'
import Logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { FaBars } from 'react-icons/fa6'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const [btnToggle, setBtnToggle] = useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            setBtnToggle(false)
          }}
        >
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={`nav__links ${btnToggle ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  onClick={() => {
                    setBtnToggle((prev) => !prev)
                  }}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          onClick={() => {
            setBtnToggle((prev) => !prev)
          }}
          className="nav__toggle-btn"
        >
          {btnToggle ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
