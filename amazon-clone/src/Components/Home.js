import React from 'react'
import banner from '../images/amazon_banner.jpg'
import './Home.css'

function Home() {
    return (
        <div>
            <img src={banner} alt="Amazon Marketing Banner" className='home__banner' />
        </div>
    )
}

export default Home
