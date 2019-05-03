import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './TakePoll.scss'

class TakePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }
        this.voted = false
    }
    handleOptionChange = changeEvent => {
        if (this.voted == true) {
            changeEvent.preventDefault();
        } else {
            this.setState({
                selectedOption: changeEvent.target.value
            });
        }

    };
    handleFormSubmit = (e) => {
        if (this.voted == false) {
            e.preventDefault();
            alert(`You have voted: ${this.state.selectedOption}`);
            this.voted = true;
        }
        else {
            e.preventDefault();
            alert(`You can'nt vote again`);
        }
    };
    render() {
        const rowss = this.props.location.state.find((m) => m.id == this.props.match.params.id)
        const rows = [rowss].map((m) => {
            return (<form className="form-group" key={m.id} >
                <div className='container poll-view' >
                    <h5 className='ques'>{m.question}</h5>
                    <div className='ques-opt'>
                        <div className="radio">
                            <label><input type="radio" value={m.options[0]} name="optradio" checked={this.state.selectedOption === m.options[0]}
                                onChange={this.handleOptionChange} /> {m.options[0]}</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" value={m.options[1]} onChange={this.handleOptionChange} name="optradio" checked={this.state.selectedOption === m.options[1]} /> {m.options[1]}</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" value={m.options[2]} onChange={this.handleOptionChange} name="optradio" checked={this.state.selectedOption === m.options[2]} /> {m.options[2]}</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" value={m.options[3]} onChange={this.handleOptionChange} name="optradio" checked={this.state.selectedOption === m.options[3]} /> {m.options[3]}</label>
                        </div>
                    </div>
                    <input className='btn btn-lg btn-success' type='submit' value='Submit' onClick={this.handleFormSubmit} />
                </div>
            </form>
            )
        })
        return (<div>
            {rows}
        </div>
        )
    }
}


export default TakePoll;


