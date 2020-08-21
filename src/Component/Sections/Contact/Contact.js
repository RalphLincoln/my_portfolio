import React, { Component } from 'react';

// IMPORTING CUSTOM CSS
import './contact.css';

// IMPORTING AXIOS
import axios from 'axios';

// import { h } from 'react-router-dom';

// IMPORTING MY REDUX ACTIONS
import { setEmailField, setMessageField, setNameField, setSubjectField } from '../../../actions';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleNameChange: e => dispatch(setNameField(e.target.value)),
        handleEmailChange: e => dispatch(setEmailField(e.target.value)),
        handleSubjectChange: e => dispatch(setSubjectField(e.target.value)),
        handleMessageChange: e => dispatch(setMessageField(e.target.value))
    }
}


class Contact extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        // axios.post('https://my-portfolio-back-end.herokuapp.com/api/form', {
        //     name: this.props.name,
        //     email: this.props.email,
        //     message: this.props.message,
        //     subject: this.props.subject
        // }, {
        //     header: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // })
        //     .then(response => {
        //         console.log(response)
        //         console.log('Email sent......');

        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://my-portfolio-back-end.herokuapp.com/api/form"; // site that doesn’t send Access-Control-*
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
        }) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then(contents => console.log(contents, 'Sent'))
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

    render() {
        const { name, email, subject, message, handleMessageChange, handleEmailChange, handleNameChange, handleSubjectChange } = this.props
        return (
            <div id='contact' className='container'>
                <div className='cover'>
                    <div className="row p-4">
                        <div className="col-md-6">
                            <h3 className='display-4 font-weight-bold text'>I’M EXCITED TO HEAR FROM YOU !</h3>
                            <p className='text mt-5'>Feel free to get in touch, I’m available for freelancing, collaborations.</p>

                        </div>
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    type="text"
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={handleNameChange}
                                    name=""
                                    className='form-control'
                                    id=""
                                />

                                <input
                                    type="text"
                                    placeholder='Enter subject'
                                    value={subject}
                                    onChange={handleSubjectChange}
                                    name=""
                                    className='form-control mt-2'
                                    id=""
                                />

                                <input
                                    type="email"
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    name=""
                                    className='form-control mt-2'
                                    id=""
                                />

                                <textarea
                                    name=""
                                    placeholder='Enter message'
                                    value={message}
                                    onChange={handleMessageChange}
                                    className='form-control mt-2'
                                    id="" cols="20" rows="8">
                                </textarea>

                                <button className='btn submits mt-2' type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);