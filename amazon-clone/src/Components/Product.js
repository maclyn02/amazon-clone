import React from 'react'
import './Product.css'

function Product({ id, title, price, rating, image }) {
    return (
        <div className='product'>
            <div>
                <div className="product__id">
                    {id}
                </div>
                <div className="product__title">
                    {title}
                </div>
                <div className="product__price">
                    £<strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span>⭐</span>
                            ))
                    }
                </div>
            </div>
            <div className="">
                <img className="product__image" src={image} alt={title} />
            </div>
            <div>
                <button className="product__addToBasketButton">Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
