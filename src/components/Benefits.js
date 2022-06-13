import React from 'react';
import './styles/Benefits.css'
import cc from './assets/cc.jpg'
import juice from './assets/juice.jpg'
import employee from './assets/employee.jpg'
import food from './assets/food.jpg'
import money from './assets/money.jpg'
import holiday from './assets/holiday.jpg'
const Benefits = () => {
    return ( 
        <section className='benefits'>
            <div className='benefits__content'>
                <h1>Benefits</h1>
                <p>All Employees can benefit from everyone that is beloved</p>
            </div>
            <div className='benefits__container'>
                <div className='card'>
                    <img src={cc} alt=''/>
                    <button>see</button>
                </div>
                <div className='card'>
                    <img src={juice} alt=''/>
                    <button>see</button>
                </div>
                <div className='card'>
                    <img src={employee} alt=''/>
                    <button>see</button>
                </div>
                <div className='card'>
                    <img src={food} alt=''/>
                    <button>see</button>
                </div>
                <div className='card'>
                    <img src={money} alt=''/>
                    <button>see</button>
                </div>
                <div className='card'>
                    <img src={holiday} alt=''/>
                    <button>see</button>
                </div>
            </div>
        </section>
     );
}
 
export default Benefits;