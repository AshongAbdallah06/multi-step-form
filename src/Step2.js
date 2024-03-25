import React, { useState, useContext } from 'react';
import arcadeIcon from './images/icon-arcade.svg';
import advancedIcon from './images/icon-advanced.svg';
import proIcon from './images/icon-pro.svg'
import { Link } from 'react-router-dom';
import { AppContext } from './App';

const Step2 = () => {

    const { 
        monthly, 
        setMonthly, 
        chosenPlan, 
        addClass,
        handlePrice 
    } = useContext(AppContext);
    const [monthIsToggled, setMonthIsToggled] = useState(true);

    const handleToggle = () => {
        setMonthIsToggled(!monthIsToggled);
        setMonthly(!monthly);
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
                <div 
                    className={`arcade ${chosenPlan === 'Arcade' ? 'chosen' : ''}`} 
                    onClick={() => {
                        addClass('Arcade');
                        handlePrice("$9");
                    }}
                >
                    <img src={arcadeIcon} alt="" />
                    <p className='mobile'>
                        <p className="name">Arcade</p>
                        <p className="price">
                            {monthly ? "$9" : "$90"}/{monthly ? "mo" : "yr"}
                        </p>
                    </p>
                    <p className="free-months">
                        {!monthly ? "2 months free" : ""}
                    </p>
                </div>

                <div 
                    className={`advanced ${chosenPlan === 'Advanced' ? 'chosen' : ''}`} 
                    onClick={() => {
                        addClass('Advanced');
                        handlePrice("$12");
                    }}
                >
                    <img src={advancedIcon} alt="" />
                    <p className='mobile'>
                        <p className="name">Advanced</p>
                        <p className="price">
                            {monthly ? "$12" : "$120"}/{monthly ? "mo" : "yr"}
                        </p>
                    </p>
                    <p className="free-months">
                            {!monthly ? "2 months free" : ""}
                    </p>
                </div>

                <div
                    className={`pro ${chosenPlan === 'Pro' ? 'chosen' : ''}`} onClick={() => {
                        addClass('Pro'); 
                        handlePrice("$15");
                    }}>
                    
                    <img src={proIcon} alt="" />
                    <p className='mobile'>
                        <p className="name">Pro</p>
                        <p className="price">
                            {monthly ? "$15" : "$150"}/{monthly ? "mo" : "yr"}
                        </p>
                    </p>
                    <p className="free-months">
                            {!monthly ? "2 months free" : ""}
                    </p>
                </div>
            </div>

            <div className='duration'>
                <span 
                    className="monthly" 
                    style={{ color: !monthIsToggled ? 'hsl(231, 11%, 63%)' : "hsl(213, 96%, 18%)"}}>
                        Monthly
                </span>

                <button className='toggle' onClick={handleToggle}>
                    <div className={`${monthly ? "white" : "animation"}`}></div>
                </button>

                <span 
                    className="yearly" 
                    style={{ color: monthIsToggled ? 'hsl(231, 11%, 63%)' : "hsl(213, 96%, 18%)"}}>
                        Yearly
                </span>
            </div>

            <div className="bottom">
                <Link to='/' className='go-back'>Go Back</Link>
                <Link to={{
                    pathname: '/add-ons',
                    state: { chosenPlan, monthly }
                }}>
                    <button className="next">Next Step</button>
                </Link>
            </div>
        </div>
    )
}

export default Step2