import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './App';

const Step4 = () => {

    const { chosenPlan, monthly, planPrice, addOns } = useContext(AppContext);

    const totalAddOnPrice = Object.values(addOns)
    .filter(addOn => addOn.selected) // Filter selected add-ons
    .reduce((total, addOn) => total + addOn.price, 0); // Sum prices

    return (
        <div className="right-section">
            <header>
                <h1>Finishing up</h1>
                <p className="message">
                    Double-check everything looks OK before confirming.
                </p>                
            </header>

            <div className='summary'>
                <div className='summary-items top'>
                    <div>
                        <div className="name">
                            {chosenPlan} ({monthly ? "Monthly" : "Yearly"})
                        </div>
                        <Link to='/select-your-plan'>                    
                            <div className="change">Change</div>
                        </Link>
                    </div>
                    <div className='plan-price'>
                        ${planPrice === '' ? "9" : planPrice}{monthly ? '' : "0"}/{monthly ? 'mo' : "yr"}
                    </div>
                </div>
                
                <div>
                    <div className="addon-selected">
                        {Object.entries(addOns).map(([
                            addOn, { 
                                selected, 
                                price, 
                                name 
                            }]) => (
                            selected && (
                                <div className='summary-items' key={addOn}>
                                    <div className='addon'>{name}</div>
                                    <div className='addon-price'>
                                        +${price}{monthly ? '' : "0"}/{monthly ? "mo" : "yr"}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>                    
                </div>


                <div className='summary-items total'>
                    <div className='total-label'>Total (per month)</div>
                    <div className='total-price'>
                        +${planPrice + totalAddOnPrice}{monthly ? '' : "0"}/{monthly ? 'mo' : "yr"}
                    </div>
                </div>
            </div>

            <div className="bottom">
                <Link to='/add-ons' className='go-back'>Go Back</Link>
                <Link to='/thank-you'>
                    <button className="next">Confirm</button>                
                </Link>
            </div>
        </div>
    )
}

export default Step4;
