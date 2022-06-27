import React from 'react'

const Modal = () => {
    return (
        <>
            <div className='overlay'>
                <div className='overlay-inner'>
                    <button className='close'>
                        <i className='fas fa-times'></i>
                        <div className='inner-box'>
                            <img src='../../public/images/book.png' alt='' />
                            <div className='info'>
                                <h1>React JS pavyzdžiai</h1>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal
