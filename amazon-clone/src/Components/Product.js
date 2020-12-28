import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

function Product({ id, title, price, rating, image }) {

    const [, dispatch] = useStateValue()


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }

    return (
        <div className='product'>
            <div>
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
                                <span key={i}>⭐</span>
                            ))
                    }
                </div>
            </div>
            <div className="">
                <img className="product__image" src={image} alt={title} />
            </div>
            <div>
                <button
                    className="product__addToBasketButton"
                    onClick={addToBasket}
                    >
                    Add to Basket
                </button>
            </div>
        </div>
    )
}

export default Product
