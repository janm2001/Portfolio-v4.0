import { Link } from '@mui/material'
import React from 'react'
import style from './Navbar.module.css'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import { useState } from 'react'
import {Paper,MenuItem,MenuList,ListItemText} from '@mui/material'
import {AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
  const [menu,setMenu] = useState(false);
  return (
    <>
    <div className={style.container}>
    <nav className={style.navbar}>
            <div className={style.wrap}>
            <div className={style.logo}>
                <h1>Jan Mackovic</h1>
            </div>

            <div className={style.links}>
                <Link href="#app">Home</Link>
                <Link href="#project">Projects</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>

            </div>

            <div className={style.social}>
                <Link target="_blank" href="https://www.linkedin.com/in/jan-mackovic-000330198/" ><AiFillLinkedin className={style.linkedin}/></Link>
                <Link target="_blank"  href="https://github.com/janm2001"><AiFillGithub className={style.github}/></Link>
                

            </div>

            </div>

            <div className={style.smallerDisplay}>
              <h3>Jan Mackovic</h3>
              <button onClick={() => setMenu(!menu)}>
              <AiOutlineMenu />
              </button>
              

              

            </div>

      
      {menu && <Paper className={style.linksSmall} sx={{ width: "100%",background:"#333",color:"#fff",textAlign:"center" }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset><Link href='#app'>Home</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link href='#project'>Projects</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link href='#about'>About</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link href='#contact'>Contact</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link target="_blank"  href='https://www.linkedin.com/in/jan-mackovic-000330198/'><AiFillLinkedin className={style.linkedin}/></Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link target="_blank" href='https://github.com/janm2001'><AiFillGithub className={style.github}/></Link></ListItemText>
        </MenuItem>
        
      </MenuList>
    </Paper>}

        </nav>

    </div>
        
    </>
  )
}

export default Navbar