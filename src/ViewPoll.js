import React from 'react';
import './ViewPoll.scss'

class ViewPoll extends React.Component {
    render() {
        const item = this.props.item;
        const rows = item.map((m) => {
            return (
                <div className='container poll-view' key={m.id}>
                    <h5 className='card-header'>{m.question}</h5>
                    <div className='card-body'>
                        <div>
                            <input className='checkbox' type='checkbox' />
                            {m.options[0]}
                        </div>
                        <div>
                            <input className='checkbox' type='checkbox' />
                            {m.options[1]}
                        </div>
                        <div>
                            <input className='checkbox' type='checkbox' />
                            {m.options[2]}
                        </div>
                        <div>
                            <input className='checkbox' type='checkbox' />
                            {m.options[3]}
                        </div>
                    </div>
                </div>
            )
        })
        return (<div>
            {rows}
        </div>
        )
    }
}

export default ViewPoll;

