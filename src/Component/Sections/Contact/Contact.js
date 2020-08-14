import React, { Component } from 'react';

import BgImage from '../../../images/subscribe-bg.png'

import './contact.css';

export default class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        });
    }

    render() {
        return (
            <div id='contact' className='container'>
                <div className='cover'>
                    <div className="row p-4">
                        <div className="col-md-6 d-flex align-items-center">
                            <h3>I’M EXCITED TO HEAR FROM YOU !</h3>
                            <p>Feel free to get in touch, I’m available for freelancing, collaborations and so on.</p>
                        </div>
                        <div className="col-md-6">
                            <form action="" method="post">
                                <label htmlFor="">Name</label>
                                <input type="text" value={this.state.name} onChange={this.handleNameChange} name="" className='form-control' id="" />

                                <label className='mt-2' htmlFor="">Email</label>
                                <input type="email" value={this.state.email} onChange={this.handleEmailChange} name="" className='form-control' id="" />

                                <label className='mt-2' htmlFor="">Message</label>
                                <textarea name="" value={this.state.message} onChange={this.handleMessageChange} className='form-control' id="" cols="20" rows="8"></textarea>

                                <button className='btn btn-light mt-2' type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
