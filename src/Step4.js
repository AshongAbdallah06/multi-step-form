import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './App';

const Step2 = () => {

    const { chosenPlan, monthly } = useContext(AppContext)

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
                            {chosenPlan === '' ? "Arcade" : chosenPlan} ({monthly ? "Monthly" : "Yearly"})
                        </div>
                        <Link to='/select-your-plan'>                    
                            <div className="change">Change</div>
                        </Link>
                    </div>
                    <div className='plan-price'>
                        $9{monthly ? '' : "0"}/{monthly ? 'mo' : "yr"}
                    </div>
                </div>
                
                <div className='summary-items'>
                    <div className='addon'>Online service</div>
                    <div className='addon-price'>
                        $1{monthly ? '' : "0"}/{monthly ? 'mo' : "yr"}
                    </div>
                </div>

                <div className='summary-items'>
                    <div className='addon'>Larger storage</div>
                    <div className='addon-price'>
                        $2{monthly ? '' : "0"}/{monthly ? 'mo' : "yr"}
                    </div>
                </div>

                <div className='summary-items total'>
                    <div className='total-label'>Total (per month)</div>
                    <div className='total-price'>
                        $12{monthly ? '' : "0"}/{monthly ? 'mo' : "yr"}
                    </div>
                </div>
            </div>

            <div className="bottom">
                <Link to='/add-ons' className='go-back'>Go Back</Link>
                <button className="next">Confirm</button>
            </div>
        </div>
    )
}

export default Step2