import React from 'react';
import checkMark from './images/icon-thank-you.svg'

const Step5 = () => {
    return (
        <div className='thank-you right-section'>
            <img src={checkMark} className='checkmark' alt="Checkmark" />
            <h1>Thank you!</h1>

            <p className="thank-you-message">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to emial us at support@loremgaming.com
            </p>
            
        </div>
    )
}

export default Step5