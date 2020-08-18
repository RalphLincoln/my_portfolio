import React from 'react'

// MY CUSTOM CSS
import './bigDisplay.css'

// MY IMAGE
import Pic from '../../../images/images.png'

// IMPORTING RESUME DOCUMENT
import Resume from '../../../assets/ALANEME OFFICIAL RESUME.pdf'

export default function BigDisplay() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-6'>
                        <img src={Pic} width='87%' alt='cartoon' className='img-fluid mx-auto' />
                    </div>
                    <div className='col-md-6 bg-white text-left'>
                        <div className='pt-5 container-fluid'>
                            <h2>HI THERE!</h2>
                            <h1 className="pt-3">I'M RALPH LINCOLN</h1>
                            <p className="pt-3 d-flex p-2 bd-highlight">
                                I’m a web developer. I spend my days with my hands in many different areas of web development from
                                back end programming (Node.js, Express.js) to front end engineering (HTML, CSS, and jQuery/Javascript(React.js)).
                        </p>
                            <div className="pt-3">
                                <a href={Resume} download>
                                    <button type='button' className='btn pr-5 pt-3 pb-3 pl-5 bt-color'>DOWNLOAD RESUME</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
