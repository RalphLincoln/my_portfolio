import React from 'react'

// MY CUSTOM CSS
import './bigDisplay.css'

// MY IMAGE
import Pic from '../../../Snapchat-280392720.jpg'

export default function BigDisplay ()
{
    return (
        <div>
            <div className="row">
                <div className='col-md-6 bg-1'>
                    <img src={Pic} width='37%' className='img-fluid mx-auto' />
                </div>
                <div className='col-md-6 my-auto pl-5 text-left'>
                    <h2>HI THERE!</h2>
                    <h1>I'M RALPH LINCOLN</h1>
                    <h3>A REACT DEVELOPER</h3>
                    <p>Ghuidiiekdjiiodchihdihsfinekwhifhiowhohefiowhoifiowhio nifheowihiwo
                        wfjbvnjwoivnwkniovnwneiofhwpfjpwokpfjwpohfibvnvojwopjwppwojpoj
                        ivhwippjwpojfpwjpfjwfoojwiowjpjwpjfpowjp.
                    </p>
                    <div>
                        <button className='btn bt-color'>HIRE ME</button>
                        <button className='btn bt-color'>MY PROJECTS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
