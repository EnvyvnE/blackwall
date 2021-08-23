import React from 'react';
import './Main.css';

function Main(props) {
    return (
        <main className='main'>
            <div className='main__container'>
                <div className='main__info'>
                    <h1 className='main__title'>
                        The best video online
                        meeting software.
                    </h1>
                    <p className='main__paragraph'>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                    </p>
                    <button className='main__button'>
                        Start for free
            </button>
                </div>
                <div className='main__image'>

                </div>
            </div>
        </main>
    )
}
export default Main;