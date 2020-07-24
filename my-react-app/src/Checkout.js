import React, {useState, useEffect} from 'react';
import Order from './Order.js';
import * as yup from "yup";
import axios from "axios";
import { TextField } from '@material-ui/core';
import './Checkout.css';

const Checkout = props => {
    const orderState = {
        image: 'https://picsum.photos/100/100',
        title: 'This Item',
        renter: 'This User',
        price: '100'
    }
    // Selected item(s) sets setOrder
    const [order, setOrder] = useState([orderState]);
    const defaultState = {
        name: '',
        nameOnCard: '',
        cardNumber: '',
        expiryDate: '',
        CVV: '',
        terms: false,
        orderedItems: {order}
    };
    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({...defaultState, terms: ''});
    const [buttonDisabled, setButtonDisabled] = useState(true);

    let formSchema = yup.object().shape({
        name:       yup.string()
                       .required('Please provide a name.'),
        nameOnCard: yup.string()
                       .required('Please provide a name on card.'),
        cardNumber: yup.string()
                       .min(16, 'Card Number must be at least 16 numbers.')
                       .max(16, 'Card Number must be at most 16 numbers.'),
        expiryDate: yup.string()
                       .min(4, 'At least four numbers')
                       .max(4, 'Card Expiration Date should only be four numbers (no / needed)'),
        CVV:        yup.string()
                       .min(3, 'CVV must be at least 3 numbers.')
                       .max(3, 'CVV must be at most 3 numbers.'),
        terms:      yup.boolean()
                       .oneOf([true], 'Please agree to the terms and conditions.')
    })
    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => setButtonDisabled(!valid));
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        console.log('form submitted!');
        axios
            .post('https://reqres.in/api/users', formState)
            .then(() => {setOrder([...order]);
                         console.log(formState);})
            .catch(err => console.log('Error:' + err));
    };
    const validateChange = e => {
        e.persist();
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => 
                setErrors({
                ...errors, 
                [e.target.name]: ''
            }))
            .catch(error => setErrors({
                ...errors,
                [e.target.name]: error.errors[0]
            }));
    }
    const inputChange = e => {
        // console.log(e.target.type);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
        validateChange(e)
    };

    return (
        <div className='formBody'>
            <form className='signUpForm' onSubmit={formSubmit}>
                <h1>Checkout</h1>
                <div className='txtb'>
                    <TextField
                        className='TF'
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        type='text'
                        name='name'
                        autoComplete='off'
                        value={formState.name}
                        onChange={inputChange}/>
                    <p className='error'>{errors.name}</p>
                </div>
                <div className='txtb'>
                    <TextField
                        className='TF'
                        id="outlined-basic" 
                        label="Name On Card" 
                        variant="outlined"
                        type='text'
                        name='nameOnCard'
                        autoComplete='off'
                        value={formState.nameOnCard}
                        onChange={inputChange}/>
                    <p className='error'>{errors.nameOnCard}</p>
                </div>
                <div className='txtb'>
                    <TextField 
                        className='TF'
                        id="outlined-basic" 
                        label="Card Number" 
                        variant="outlined"
                        type='text'
                        name='cardNumber'
                        autoComplete='off'
                        value={formState.cardNumber}
                        onChange={inputChange}/>
                    <p className='error'>{errors.cardNumber}</p>
                </div>
                <div className='txtb'>
                    <TextField
                        className='TF'
                        id="outlined-basic" 
                        label="Card Expiry Date" 
                        variant="outlined"
                        type='text'
                        name='expiryDate'
                        autoComplete='off'
                        value={formState.expiryDate}
                        onChange={inputChange}/>
                    <p className='error'>{errors.expiryDate}</p>
                </div>
                <div className='txtb'>
                    <TextField
                        className='TF'
                        id="outlined-basic" 
                        label="CVV" 
                        variant="outlined"
                        type='text'
                        name='CVV'
                        autoComplete='off'
                        value={formState.CVV}
                        onChange={inputChange}/>
                    <p className='error'>{errors.CVV}</p>
                </div>
                <div className='tos'>
                    <label className='terms' htmlFor="terms">
                        <p><input name='terms' type='checkbox' onChange={inputChange}/> </p>
                         I have read and accept <br/>
                        <a href='#' className='tosLink'>Terms of Service</a>
                    </label>
                </div>
                <br/>
                <button className="login-button" disabled={buttonDisabled}
                 type="submit" >Order</button>
            </form>
            <div className='signUpForm2'>
                <h1>Order Items</h1>
                {order.length !== 0 && <Order order={order}/>}
            </div>
        </div>
)}

export default Checkout;