import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './BasketItem.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function BasketItem({ id, title, price, rating, image }) {

    const [, dispatch] = useStateValue()
    const [qty, setQty] = useState(1)

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id
            }
        })
    }

    return (
        <div className='basketItem'>
            <div className="basketItem__image">
                <img src={image} alt={title} />
            </div>
            <div className='basketItem__detailsPane'>
                <div className="basketItem__title">
                    {title}
                </div>
                <div className="basketItem__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span key={i}>⭐</span>
                            ))
                    }
                </div>
                <div className='basketItem__stockAvailable'>In Stock</div>
                <div className="basketItem__buttonPanel">
                    <div className="basketItem__quantityPanel">
                        <span>Qty</span>
                        <input type='number' value={qty} onChange={event => setQty(event.target.value)} />
                    </div>
                    <button onClick={removeFromBasket}>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </div>
            <div className='basketItem__pricePane'>
                <div className="basketItem__price">
                    £<strong>{price * qty}</strong>
                </div>
            </div>
        </div>

    )
}

export default BasketItem
