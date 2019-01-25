import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './PollingMenu.scss'

export default () => {
    return (
        <div className='menu-div'>
            <Link className='menu' to="/createPoll">Create New Poll</Link>
            <Link  className='menu' to="/viewPoll">View Existing Polls</Link>
        </div>
    )

}

