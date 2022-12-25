
import './Header.css'

import { useRef  } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'

import Logo from '../../assets/images/Logo.png'
import userIcon from '../../assets/images/user-icon.png'

const Header = () => {
  const nav_links = [
    {
      path:'home' ,
      display:'Home' 
    } ,
    {
      path:'services' ,
      display:'Services' 
    } 
  ] ;

  const menuRef = useRef(null) ;

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  return (
    <header className="header" >
      <Container>
        <Row>
          <div className="nav_wrapper p-0 m-0" >
            
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav_links.map((item , index)=>(
                    <li className="nav_item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : "" } >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="nav_icons">
              <Link to='/login'><motion.img whileTap={{scale: 1.1}} src={userIcon} alt="" /></Link>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-3-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header ;