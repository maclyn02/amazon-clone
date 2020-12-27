import React from 'react'
import banner from '../images/amazon_banner.jpg'
import './Home.css'
import Product from './Product'
import products from '../data/products'

function Home() {
    return (
        <div className='home'>
            <img
                src={banner}
                alt="Amazon Marketing Banner"
                className='home__banner'
            />

            <div className="home__productPanel">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
