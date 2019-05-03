import React from 'react';
import uuid from 'uuid';
import './CreatePoll.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        }
        this.q = null;
        this.oa = null;
        this.ob = null;
        this.oc = null;
        this.od = null;
    }

    fillQues = (event) => {
        this.q = (event.target.value)
    }
    fillOptionsA = (event) => {
        this.oa = (event.target.value)
    }
    fillOptionsB = (event) => {
        this.ob = (event.target.value)
    }
    fillOptionsC = (event) => {
        this.oc = (event.target.value)
    }
    fillOptionsD = (event) => {
        this.od = (event.target.value)
    }
    submitForm = () => {
        this.setState({
            item:
            {
                id: uuid(),
                question: this.q + '?',
                options: [this.oa, this.ob, this.oc, this.od],
                answer: ''
            }
        })
    }
    render() {
        return (
            <div>
                <form className="form-group">
                    <label><h4>Question</h4></label>
                    <input className="form-control" style={{ width: '100%' }} type='text' onChange={this.fillQues} />
                    <label><h5>Options</h5></label>
                    <ol type='A' >
                        <li><input className="form-control opt-input" onChange={this.fillOptionsA} /></li>
                        <li><input className="form-control opt-input" onChange={this.fillOptionsB} /></li>
                        <li><input className="form-control opt-input" onChange={this.fillOptionsC} /></li>
                        <li><input className="form-control opt-input" onChange={this.fillOptionsD} /></li>
                    </ol>
                    <Link to="/"><input className='btn btn-lg btn-success' type='submit' value='Create' onClick={()=>this.props.handleSubmit(this.state.item)} onMouseDown={this.submitForm} /></Link>
                </form>
            </div>
        )
    }
}

export default CreatePoll;