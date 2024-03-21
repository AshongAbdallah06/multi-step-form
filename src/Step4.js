import React from 'react';
import { Link } from 'react-router-dom';

const Step2 = () => {

    return (
        <div className="right-section">
            <header>
                <h1>Finishing up</h1>
                <p className="message">
                    Double-check everything looks OK before confirming.
                </p>                
            </header>

            <div className="bottom">
                <Link to='/add-ons' className='go-back'>Go Back</Link>
                {/* <Link to='/confirm'> */}
                    <button className="next">Confirm</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Step2