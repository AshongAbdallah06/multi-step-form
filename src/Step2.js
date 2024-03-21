import React, { useState, useContext } from 'react';
import arcadeIcon from './images/icon-arcade.svg';
import advancedIcon from './images/icon-advanced.svg';
import proIcon from './images/icon-pro.svg'
import { Link } from 'react-router-dom';
import { AppContext } from './App';

const Step2 = () => {

    const { monthly, setMonthly } = useContext(AppContext);
    const [monthIsToggled, setMonthIsToggled] = useState(true);

    const handleToggle = () => {
        setMonthIsToggled(!monthIsToggled);
        setMonthly(!monthly); // Update monthly directly based on monthIsToggled
    };    

    return (
        <div className="right-section">
            <header>
                <h1>Select your plan</h1>
                <p className="message">
                    You have the option of monthly or yearly billing.
                </p>                
            </header>

            <div className="plans">
                <div>
                    <img src={arcadeIcon} alt="" />
                    <p className="name">Arcade</p>
                    <p className="price">$9/mo</p>
                    <p className="free-months">
                        {!monthly ? "2 months free" : ""}
                    </p>
                </div>

                <div>
                    <img src={advancedIcon} alt="" />
                    <p className="name">Advanced</p>
                    <p className="price">$12/mo</p>
                    <p className="free-months">
                        {!monthly ? "2 months free" : ""}
                    </p>
                </div>

                <div>
                    <img src={proIcon} alt="" />
                    <p className="name">Pro</p>
                    <p className="price">$15/mo</p>
                    <p className="free-months">
                        {!monthly ? "2 months free" : ""}
                    </p>
                </div>
            </div>

            <div className='duration'>
                <span className="monthly" style={{ color: !monthIsToggled ? 'hsl(231, 11%, 63%)' : "hsl(213, 96%, 18%)"}}>Monthly</span>

                <button className='toggle' onClick={handleToggle}>
                    <div className={`${monthly ? "white" : "animation"}`}></div>
                </button>

                <span className="yearly" style={{ color: monthIsToggled ? 'hsl(231, 11%, 63%)' : "hsl(213, 96%, 18%)"}}>Yearly</span>
            </div>

            <div className="bottom">
                <Link to='/' className='go-back'>Go Back</Link>
                <Link to='/add-ons'>
                        <button className="next">Next Step</button>
                </Link>
            </div>
        </div>
    )
}

export default Step2