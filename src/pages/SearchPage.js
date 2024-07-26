import React from 'react'
import '../styling/SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>62 stays · 26 August to 30 August · 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancellation flexibility</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms & beds</Button>
            <Button variant='outlined'>More filters</Button>
        </div>

        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
        
        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
        
        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
        
        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
        
        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
        
        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
        
        <SearchResult 
            img='https://a0.muscache.com/im/pictures/miso/Hosting-797303673147993087/original/49c5a1ee-4790-4c18-ac17-d53e2bfc72c9.jpeg?im_w=1200' 
            location='Markleton, Pennsylvania'
            title='Luxury Log House on 32 acres w/Hot Tub, Game Room'
            description='Escape to Serenity Log House in Laurel Highlands. Complete privacy and serenity, yet very close to all nearby activities, including skiing, hiking, rafting, biking and more'
            star='4.97'
            price='$477/night'
            total='$2,951'
        />
    </div>
  )
}

export default SearchPage