import React, {useState} from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';


const Forma = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>

        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img className='form-img' src='img/cookies2.jpg' alt='spaceship' />
            </div>
            {!isSubmitted ? (
            <FormSignUp submitForm={submitForm} />) : 
            (<FormSuccess />)}
        </div>
        </>
    )
}

export default Forma
