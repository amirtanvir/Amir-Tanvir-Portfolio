import React from 'react'
import { Navbar, Button } from 'flowbite-react'

const Nav = () => {

  return (
    <div>
        <Navbar fluid={true} rounded={true} className='bg-gradient-to-r to-grey4 from-grey6'>
            <Navbar.Brand href="https://amirtanvir.com/">
                <span className="pl-5 text-transparent bg-clip-text bg-gradient-to-r to-grey9 from-grey7 
                hover:bg-clip-text hover:bg-gradient-to-r hover:to-grey6 hover:from-grey9
                self-center whitespace-nowrap text-xl font-bold dark:text-white ">
                Amir Tanvir
                </span>
            </Navbar.Brand>
        <div className="flex md:order-2">
            <Button className='mr-2' gradientDuoTone="purpleToBlue">
            Contact Me
            </Button>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse className=''>
            <Navbar.Link
            href="/navbars"
            active={false}
            >
            <span className=' text-black hover:text-grey7'>Home</span>
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            <span className='text-black hover:text-grey7'>Projects</span>
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            <span className='text-black hover:text-grey7'>Blog</span>
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Nav