import React , { useState } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name : yup.string().required(),
    email : yup.string().email(),
    reason: yup.string().required(),
    area : yup.string().required()
})

export default function Contact() {
    const [contactState, setContactState] = useState({
        name : '',
        email : '',
        reason : '',
        area : ''
    })

const [errors , setErrors] = useState({
        name : '',
        email : '',
        reason : '',
        area : ''
})

const formSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted')
    //axiosWithAuth()
    // .post()
    // .then(response => console.log(response))
    // .catch(err => console.log(err))
}

const validate = (e) => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
        setErrors({
            ...errors,
            [e.target.name] : ''
        })
    })
    .catch(err => {
        console.log(err.errors)
        setErrors({
            ...errors
        })
    })
}
const inputChange = e => {
    validate(e)
    console.log('input Changed' , e.target.name)
    setContactState ({...contactState, [e.target.name] : e.target.value})
}
return(
    <div className = "form-container-outer">
        <form className = 'form-container' onSubmit = {formSubmit}>
        <label htmlFor='name'>Name</label>
        <input type = 'name' type = 'name' id = 'name' value = {contactState.name} onChange = {inputChange}/>

        <label htmlFor='email'>Email</label>
        <input type = 'email' type = 'email' id = 'email' value = {contactState.email} onChange = {inputChange}/>

        <label htmlFor = 'area' >
            Choose one that accures
            </label>
        <select value = {contactState.area} name = 'area' id = 'area' onChange = {inputChange}>
                <option value = 'Burrower'>Borrower</option>
                <option value = 'Renter'>Renter</option>
                <option value = 'Technical'>Technical</option>
        </select>
        
        <label htmlFor = 'reason'>
            Describe to us why you're Contacting us
        </label>
        <textarea name = 'reason' id = 'reason' value = {contactState.reason} onChange = {inputChange}/>

        <button> Submit! </button>
        </form>
    </div>
)
}