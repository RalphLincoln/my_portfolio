import React, { Component } from 'react';

import { FaEye } from 'react-icons/fa';


import BigTitle from '../../Specials/BigTitle'

// MY CSS
import './projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <BigTitle title='PROJECTS' />
                <div className="container">
                    <div className="card-deck">
                        <div className="card shadow grow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Covid-19 Tracker</h5>
                                <p className="card-text tiny">React.js+Bootstrap+Node.js+MongoDB+Mongoose</p>
                                <hr />
                                <p className="card-text">A web app for tracking the status of Covid-19 Spread in Nigeria.
                                </p>
                                <a href='https://naughty-johnson-65054a.netlify.app/' className="card-text text-right nav-link"><FaEye className='icons' /></a>
                            </div>
                        </div>
                        <div className="card shadow grow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">School Management App</h5>
                                <p className="card-text tiny">React.js+Bootstrap+Node.js+MongoDB+Mongoose</p>
                                <hr />
                                <p className="card-text">Built a School Management App. It helps student, pupils register for
                                courses.
                                </p>
                                <a href='https://boring-clarke-306fe2.netlify.app/' className="card-text  text-right nav-link"><FaEye className='icons' /></a>
                            </div>
                        </div>
                        <div className="card shadow grow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Nemos</h5>
                                <p className="card-text tiny">Bootstrap+PHP+MySql</p>
                                <hr />
                                <p className="card-text">This is a landing page for an advertisement campaign. </p>
                                <a href='https://nemos-project.herokuapp.com/' className="card-text text-right nav-link"><FaEye className='icons' /></a>
                            </div>
                        </div>
                    </div>


                    <div className="card-deck mt-4">
                        <div className="card shadow grow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Weather App</h5>
                                <p className="card-text tiny">React.js+Bootstrap</p>
                                <hr />
                                <p className="card-text">A web app that provides weather information anywhere in the world</p>
                                <a href='https://lincolnweather.netlify.app/' className="card-text text-right nav-link"><FaEye className='icons' /></a>
                            </div>
                        </div>
                        <div className="card shadow grow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Beach Resort</h5>
                                <p className="card-text tiny">React.js+Bootstrap</p>
                                <hr />
                                <p className="card-text">A web app that helps you log into a hotel</p>
                                <a href='https://adoring-booth-bd860e.netlify.app/' className="card-text  text-right nav-link"><FaEye className='icons' /></a>
                            </div>
                        </div>
                        <div className="card shadow grow">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">E-commerce</h5>
                                <p className="card-text tiny">React.js+Bootstrap</p>
                                <hr />
                                <p className="card-text">This is an e-comerce web-site</p>
                                <a href='https://vigilant-pasteur-b35c88.netlify.app/' target='__blank' className="card-text text-right nav-link"><FaEye className='icons' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
