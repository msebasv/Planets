import React, { useState } from 'react'

import Logo from '../../assets/images/astronaut.png'

import { GiHamburgerMenu } from 'react-icons/gi'

// import './Navbar.css'
import {
  Container,
  Wrapper,
  Hamburguer,
  Menu,
  MenuItem,
  MenuItemLink,
  Img,
} from './style'

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false)

  return (
    <Container data-aos="fade-down" data-aos-duration="1000">
      <Wrapper>
        <Hamburguer onClick={() => setShowMobile(!showMobile)}>
          <GiHamburgerMenu size="30px" />
        </Hamburguer>
        <Menu open={showMobile}>
          <MenuItem>
            <MenuItemLink
              href="#about"
              onClick={() => setShowMobile(!showMobile)}
            >
              About
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#explore"
              onClick={() => setShowMobile(!showMobile)}
            >
              Explore
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#principal"
              onClick={() => setShowMobile(!showMobile)}
            >
              <Img src={Logo}></Img>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#journal"
              onClick={() => setShowMobile(!showMobile)}
            >
              Journal
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#contact"
              onClick={() => setShowMobile(!showMobile)}
            >
              Contact
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
    // <div
    //   className="navbar_container"
    //   data-aos="fade-down"
    //   data-aos-duration="1000"
    // >
    //   <div className="navbar_wrapper">
    //     <div className="navbar_hamburguer">
    //       <GiHamburgerMenu
    //         className="icon_hamburguer"
    //         size="30px"
    //         onClick={() => setShowMobile(!showMobile)}
    //       />
    //     </div>
    //     <ContainerMenu className="container_menu" open={setShowMobile}>
    //       <li>
    //         <a href="#about">About</a>
    //       </li>
    //       <li>
    //         <a href="#explore">Explore</a>
    //       </li>
    //       <li>
    //         <a href="#principal">
    //           {/* Principal */}
    //           <img src={Logo} className="logo"></img>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#journal">Journal</a>
    //       </li>
    //       <li>
    //         <a href="#contact">Contact</a>
    //       </li>
    //     </ContainerMenu>
    //   </div>
    // </div>
  )
}

export default Navbar
