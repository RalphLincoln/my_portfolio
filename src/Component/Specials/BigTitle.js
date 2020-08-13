import React from 'react'

import './bigTitle.css';

const BigTitle = (props) => {
    const { title } = props;
    return (
        <div className='text-center position-relative mt-5'>
            <h1 className='display-4 sub'>{title}</h1>
        </div>
    )
}

export default BigTitle
