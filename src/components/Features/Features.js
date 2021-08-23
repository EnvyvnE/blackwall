import React from 'react';
import './Features.css';
import { Link } from 'react-router-dom';
import price from '../../images/price.svg';
import qual1 from '../../images/qual1.svg';
import qual2 from '../../images/qual2.svg';
function Features(props) {
    return (
        <section className='features'>
            <h2 className='features__title'>
                Our Special Features
            </h2>
            <p className='features__paragraph'>
                We are familiar with offline speed dating flow so we designed out online
                platform considering all the requirements
            </p>
            <div className='features__container'>
                <div className="features__item-container">
                    <img src={price} alt='price' className='features__icon' />
                    <h4 className='features__naming'>Affordable Pricing</h4>
                    <p className='features__about'>
                        A dictionary of over 200 Latin words,with
                        a handful of model sentence. structures, to generate Lorem Ipsum
                    </p>
                    <Link className='features__link' to='/'>Learn more</Link>
                </div>
                <div className="features__item-container">
                    <img src={qual1} alt='quality' className='features__icon' />
                    <h4 className='features__naming'>Seamless Reliability</h4>
                    <p className='features__about'>
                        A dictionary of over 200 Latin words,with
                        a handful of model sentence. structures, to generate Lorem Ipsum
                    </p>
                    <Link className='features__link' to='/'>Learn more</Link>
                </div>
                <div className="features__item-container">
                    <img src={qual2} alt='quality' className='features__icon' />
                    <h4 className='features__naming'>Secure Collaboration</h4>
                    <p className='features__about'>
                        A dictionary of over 200 Latin words,with
                        a handful of model sentence. structures, to generate Lorem Ipsum
                    </p>
                    <Link className='features__link' to='/'>Learn more</Link>
                </div>
            </div>
        </section>
    )
}
export default Features;