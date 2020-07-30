import React from 'react';
import './Order.css';

const Order = props => {
    console.log(props.order);
    return (
        <>
            {props.order.map((e, i) => (
            <div className='order' key={i}>
                    <div className='img'>
                        <img src={e.image} alt='Selected item.'/>
                    </div>
                    <div className='itemDetails'>
                        <h2>{e.title}</h2>
                        <p>From: {e.renter}</p>
                    </div>
                    <div className='price'>
                        <h2>${e.price}/day</h2>
                    </div>
            </div>
            ))}
        </>
    )
}

export default Order;