import React from 'react';
import './Stats.css';

function Stats(props){
    return(
        <section className ='stats'>
            <div className='stats__container'>
                <p className='stats__paragraph'>Collaborate 2M+ startup and international companies ueses since 2018 </p>
                <div className='stats__count'>
                    <div className='stats__count-container'>
                        <p className='stats__count-amount'>
                        15K
                        </p>
                        <div className='stats__count-image-heart'>
                        </div>
                        <p className='stats__count-description'>
                        Active Downloads
                        </p>
                    </div>
                    <div className='stats__count-container'>
                        <p className='stats__count-amount'>
                        4.9
                        </p>
                        <div className='stats__count-image-star'>
                        </div>
                        <p className='stats__count-description'>
                        2,938 rating
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Stats;