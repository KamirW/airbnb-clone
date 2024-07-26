import React from 'react';
import '../styling/Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home__section'>
          <Card 
            src='https://dc79r36mj3c9w.cloudfront.net/prod/blog/20171221_235254_496852_greatestshowmanreview.jpeg'
            title='Online Experiences'
            description='Unique activities we can do together led by a world of hosts'
           />

          <Card
            src='https://media.cntraveler.com/photos/60f0ac456f4545b1bf712b85/16:9/w_1920%2Cc_limit/Cappadocia-GettyImages-733699331.jpg'
            title='Unique Stays'
            description='Spaces that are more than just a place to sleep'
          />

          <Card
            src='https://media.cntraveler.com/photos/64f89b92313dbf6003c96c3b/16:9/w_1920,c_limit/Round%20Hill%20Hotel%20and%20Villas_Villa%2020%20-%20Exterior.jpg'
            title='Entire Homes'
            description='Comfortable private places, with room for family and friends'
          />
        </div>

        <div className='home__section'>
          <Card 
            src='https://a0.muscache.com/im/pictures/miso/Hosting-972481355040144356/original/bdf3b2f9-3af2-4655-b979-4cbc173e7e23.jpeg?im_w=1200'
            title='Lakeside 93 | Lakefront Property | Hocking Hills'
            description='A waterfront property in the heart of Hocking Hills!'
            price='$330/night'
          />

          <Card 
            src='https://a0.muscache.com/im/pictures/8a49cfb6-3685-427f-9658-3b7cf5adffc2.jpg?im_w=720'
            title='Entire condo in Sandusky, Ohio'
            description='Experience luxury living in this stunning waterfront condo located in downtown Sandusky.'
            price='$398/night'
          />

          <Card 
            src='https://a0.muscache.com/im/pictures/6325854b-1f41-4e50-81ed-a200b8f9538d.jpg?im_w=1200'
            title='Charming lake cottage w/ hot tub'
            description='Kick back and relax in this calm, stylish space.'
            price='$282/night'
          />
        </div>
    </div>
  )
}

export default Home