import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './App';

const Step3 = () => {
    const { monthly, addOns, handleToggle } = useContext(AppContext);


    return (
        <div className="right-section">
            <header>
                <h1>Pick add-ons</h1>
                <p className="message">
                    Add-ons help enhance your gaming experience.
                </p>                
            </header>

            <div className="add-ons">
                <div
                    className='cont'
                    onClick={() => handleToggle('onlineService')}
                >
                    <input type="checkbox" checked={addOns.onlineService} readOnly />
                    <div className='text'>
                        <p className='label'>Online service</p>
                        <p className='info'>Access to multiplayer games</p>
                    </div>
                    <span>+$1{monthly ? '' : "0"}/{monthly ? "mo" : "yr"}</span>
                </div>

                <div
                    className='cont'
                    onClick={() => handleToggle('largerStorage')}
                >
                    <input type="checkbox" checked={addOns.largerStorage} readOnly />
                    <div className='text'>
                        <p className='label'>Larger storage</p>
                        <p className='info'>Extra 1TB of cloud drive</p>
                    </div>
                    <span>+$2{monthly ? '' : "0"}/{monthly ? "mo" : "yr"}</span>
                </div>

                <div
                    className='cont'
                    onClick={() => handleToggle('customizableProfile')}>
                    <input type="checkbox" checked={addOns.customizableProfile} readOnly />
                    <div className='text'>
                        <p className='label'>Customizable profile</p>
                        <p className='info'>Custom theme on your profile</p>
                    </div>
                    <span>+$2{monthly ? '' : "0"}/{monthly ? "mo" : "yr"}</span>
                </div>
            </div>

            <div className="bottom">
                <Link to='/select-your-plan' className='go-back'>Go Back</Link>
                <Link to='/summary'>
                    <button className="next">Next Step</button>
                </Link>
            </div>
        </div>
    );
}

export default Step3;
