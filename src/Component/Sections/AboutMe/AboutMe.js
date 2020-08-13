import React from 'react'

// IMPORTING IMAGES
import Image1 from '../../../images/s1.png';
import Image2 from '../../../images/s2.png';
import Image3 from '../../../images/s3.png';
// import Image4 from '../../../images/s4.png';



import BigTitle from '../../Specials/BigTitle';
const AboutMe = () => {
    return (
        <div className='pt-5'>
            <BigTitle title='SERVICES OFFERED' />
            <div className="mx-auto pt-4">
                <div className="container">
                    <div className="card-group">
                        <div className="card">
                            <img src={Image1} className="img-fluid pt-3 mx-auto" width='20%' alt="image" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase text-center font-weight-bold">Web Design</h5>
                                <p className="card-text"></p>

                            </div>
                        </div>
                        <div className="card">
                            <img src={Image2} className="img-fluid pt-3 mx-auto" width='20%' alt="image" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase text-center font-weight-bold">Dynamic</h5>
                                <p className="card-text text-center">Websites don't have to be static, I love making pages come to life.</p>

                            </div>
                        </div>
                        <div className="card">
                            <img src={Image3} className="img-fluid pt-3 mx-auto" width='20%' alt="image" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase text-center font-weight-bold">SEO Optimize</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
