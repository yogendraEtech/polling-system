import React from 'react';
import './ViewPoll.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ViewPoll extends React.Component {
    render() {
        const item = this.props.item;

        // const rows = item.map((m) => {
        //     return (
        //         <div className='container poll-view' key={m.id}>
        //             <h5 className='ques'>{m.question}</h5>
        //             {/* <Link to={{ pathname: "/EditPoll/" + m.id, state: this.props.item }}><input className='fa fas-edit' type='submit' value='Edit Poll' /></Link> */}
        //             <div className='ques-opt'>
        //                 <div className="radio">
        //                     <label><input type="radio" name="optradio" disabled /> {m.options[0]}</label>
        //                 </div>
        //                 <div className="radio">
        //                     <label><input type="radio" name="optradio" disabled /> {m.options[1]}</label>
        //                 </div>
        //                 <div className="radio">
        //                     <label><input type="radio" name="optradio" disabled /> {m.options[2]}</label>
        //                 </div>
        //                 <div className="radio">
        //                     <label><input type="radio" name="optradio" disabled /> {m.options[3]}</label>
        //                 </div>
        //             </div>
        //             <Link to={{ pathname: "/takePoll/" + m.id, state: this.props.item }}><input className='btn btn-lg btn-success' type='submit' value='Take Poll' /></Link>
        //         </div>
        //     )
        // })
        return (<div>{
            item.map((m) => 
                (
                    <div className='container poll-view' key={m.id}>
                        <h5 className='ques'>{m.question}</h5>
                        {/* <Link to={{ pathname: "/EditPoll/" + m.id, state: this.props.item }}><input className='fa fas-edit' type='submit' value='Edit Poll' /></Link> */}
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
                        <Link to={{ pathname: "/takePoll/" + m.id, state: this.props.item }}><input className='btn btn-lg btn-success' type='submit' value='Take Poll' /></Link>
                    </div>
                )
            )
        }

            {/* {rows} */}
        </div>
        )
    }
}

export default ViewPoll;

