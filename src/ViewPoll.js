import React from 'react';
import './ViewPoll.scss'
import TakePoll from './TakePoll';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

class ViewPoll extends React.Component {
    render() {
        const item = this.props.item;
        console.log(this.props.item,"-----------");
        
        const rows = item.map((m) => {
            return (
                <div className='container poll-view' key={m.id}>
                    <h5 className='ques'>{m.question}</h5>
                    <div className='ques-opt'>
                        <div className="radio">
                            <label><input type="radio" name="optradio" disabled /> {m.options[0]}</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" disabled /> {m.options[1]}</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" disabled /> {m.options[2]}</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" disabled /> {m.options[3]}</label>
                        </div>
                    </div>
                    <Link to={{pathname: "/takePoll/" + m.id, state: this.props.item}}><input className='btn btn-lg btn-success' type='submit' value='Take Poll' /></Link>
                    <Route exact path="/takePoll/:id" render={() => <TakePoll/>} />
                    <div></div>
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

