import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './PollingMenu.scss'

export default () => {
    return (
        <div className='menu-div'>
            <Link className='menu' to="/createPoll">CreatePoll</Link>
            <Link className='menu' to="/viewPoll">viewPoll</Link>
            <Link className='menu' to="/takePoll">takePoll</Link>
        </div>
    )

}

