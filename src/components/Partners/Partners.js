import React from 'react';
import './Partners.css';
import airbnb from '../../images/airbnb.svg';
import fedex from '../../images/fedex.svg';
import hubspot from '../../images/hubspot.svg';
import microsoft from '../../images/microsoft.svg';
import walmart from '../../images/walmart.svg';
import google from '../../images/google.svg';

function Partners(props){
    return (
        <section className='partners'>
            <ul className='partners__list'>
                <li className='partners__item'><img className ='partners__image partners__image-airbnp' src={airbnb} alt='airbnb'/></li>
                <li className='partners__item'><img className ='partners__image partners__image-fedex' src={fedex} alt='fedex'/></li>
                <li className='partners__item'><img className ='partners__image partners__image-hubspot' src={hubspot} alt='hubspot'/></li>
                <li className='partners__item'><img className ='partners__image partners__image-microsoft' src={microsoft} alt='microsoft'/></li>
                <li className='partners__item'><img className ='partners__image partners__image-walmart' src={walmart} alt='walmart'/></li>
                <li className='partners__item'><img className ='partners__image partners__image-google' src={google} alt='google'/></li>
            </ul>
        </section>
    )
}
export default Partners;