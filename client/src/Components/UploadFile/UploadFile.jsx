import React from 'react'
import upload from '../../Assets/cloud-computing.svg'
import './UploadFile.css'

const UploadFile  = ({ style }) => {
    return (
        <div className="UploadFile">
            <img className="image" src={upload}/>
            <h1>Drop File Here</h1>
        </div>
    )
}

export default UploadFile