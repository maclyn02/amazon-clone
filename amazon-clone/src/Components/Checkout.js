// import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import BasketItem from './BasketItem'
import { Link } from 'react-router-dom'
import { getBasketTotal } from '../reducer'

function Checkout() {

    const [{ basket }] = useStateValue()
    // following code is replaced by a reducer function
    // const [subTotal, setSubTotal] = useState(0)

    // useEffect(() => {
    //     let total = 0
    //     basket.forEach(product => {
    //         total += product.price
    //     })
    //     setSubTotal(total)

    // }, [basket])

    return (
        <div>
            {basket.length === 0 ? (
                <div className="checkout">
                    <div className="checkout__emptyBasketText">
                        <h1>You have no products in your shopping basket!</h1>
                        <Link to='/'>
                            <button className='checkout__button'>Back to shopping</button>
                        </Link>
                    </div>
                </div>
            ) : (
                    <div className="checkout">
                        <div className="checkout__productPanel">
                            <div className='checkout__header'>
                                <h2>Shopping Cart</h2>
                                <span>Price</span>
                            </div>
                            {basket?.map((product, index) => (
                                <div>
                                    <hr />
                                    <BasketItem
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        rating={product.rating}
                                        image={product.image}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='checkout__subtotalContainer'>
                            <div className="checkout__subtotalPanel">
                                <div>
                                    <span>{`Subtotal (${basket.length} ${basket.length === 1 ? 'item' : 'items'}): £${getBasketTotal(basket)}`}</span>
                                </div>
                                <button className='checkout__button'>Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Checkout
