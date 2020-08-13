import React from 'react'

// MY CUSTOM CSS
import './bigDisplay.css'

// MY IMAGE
import Pic from '../../../images/images.png'

export default function BigDisplay() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-6'>
                        <img src={Pic} width='87%' alt='image' className='img-fluid mx-auto' />
                    </div>
                    <div className='col-md-6 bg-white text-left'>
                        <div className='pt-5 container-fluid'>
                            <h2>HI THERE!</h2>
                            <h1 className="pt-3">I'M RALPH LINCOLN</h1>
                            <p className="pt-3 d-flex p-2 bd-highlight">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quod nisi id sequi rerum, deserunt possimus cupiditate nostrum maxime quam ea
                                nesciunt ex iste sit blanditiis dolore eveniet saepe, quasi asperiores.
                        </p>
                            <div className="pt-3">
                                {/* <button className='btn pr-5 pt-3 pb-3 pl-5 bt-color mr-5'>HIRE ME</button> */}
                                <button className='btn pr-5 pt-3 pb-3 pl-5 bt-color'>RESUME</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
