import React from 'react';
import { Navbar } from 'flowbite-react'
import { navLinks } from '../constants'
import ScrollLink from './ScrollLink'
import bdl from '../assets/bdllogo.png'

const Nav = () => {

    return (
        <div className="navbar">
              <Navbar
                fluid={true}
                rounded={true}
                class='bg-deepblue py-4 px-5'>

              <Navbar.Brand>
                <img
                  src={bdl}
                  className="h-9 sm:h-9"
                  alt="BDL Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle className='z-99'/>
              <Navbar.Collapse >
              {navLinks.map((navlink,index) => (
                    <ScrollLink key={index} target={navlink.id}><Navbar.Link class='text-white hover:text-lightslate' href={`#${navlink.id}`} active={true}>{navlink.title}</Navbar.Link></ScrollLink>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
  )
}

export default Nav