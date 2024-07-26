import React from 'react'
import '../styling/Header.css'
// import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button } from '@material-ui/core'
import { Language } from '@material-ui/icons'
import { ExpandMore } from '@material-ui/icons'
import { Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img 
              className='header__icon'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png?20230603231949' 
              alt='No img here'
          />
      </Link>
        
        <div className='header__center'>
            <input type='text' />
            <Search />
        </div>

        <div className='header__right'>
            <Button>Become a host</Button>
            <Language />
            <ExpandMore />
            <Avatar />
        </div>
    </div>
  )
}

export default Header