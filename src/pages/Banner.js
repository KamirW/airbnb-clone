import React, { useState } from 'react'
import '../styling/Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button variant='outlined' className='banner__searchButton' onClick={() => setShowSearch(!showSearch)}>
                    {showSearch ? "Hide" : "Show Dates"}
                    </Button>
            </div>

            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different type of getaway to uncover the hidden gems near you</h5>
                <Button variant='outlined' onClick={ () => navigate('/search') }>Explore Now</Button>
            </div>
        </div>
    )
}

export default Banner