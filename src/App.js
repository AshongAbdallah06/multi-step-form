import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import desktopSidebar from './images/bg-sidebar-desktop.svg';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
    const [monthly, setMonthly] = useState(true);
    
    return (
        <main className="App">
            <AppContext.Provider value={{ monthly, setMonthly}}>
                <Router>
                    <img src={desktopSidebar} alt="" className='sidebar-img' />

                    <div className='steps'>
                        <Link to='/' className='step'>
                            <button className='number'>1</button>
                            <div className='inline-block'>
                                <p className='label'>STEP 1</p>
                                <p className='title'>YOUR INFO</p>                            
                            </div>
                        </Link>

                        <Link to='/select-your-plan' className='step'>
                            <button className='number'>2</button>
                            <div className='inline-block'>
                                <p className='label'>STEP 2</p>
                                <p className='title'>SELECT PLAN</p>                            
                            </div>
                        </Link>

                        <Link to='/add-ons' className='step'>
                            <button className='number'>3</button>
                            <div className='inline-block'>
                                <p className='label'>STEP 3</p>
                                <p className='title'>ADD-ONS</p>
                            </div>
                        </Link>

                        <Link to='/summary' className='step'>
                            <button className='number'>4</button>
                            <div className='inline-block'>
                                <p className='label'>STEP 4</p>
                                <p className='title'>SUMMARY</p>
                            </div>
                        </Link>
                    </div>


                    <Routes>
                        <Route path='/' element={<Step1 />} />
                        <Route path='/select-your-plan' element={<Step2 />} />
                        <Route path='/add-ons' element={<Step3 />} />
                        <Route path='/summary' element={<Step4 />} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </main>
    );
}

export default App;
