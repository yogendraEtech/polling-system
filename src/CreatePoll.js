import React from 'react'
import './CreatePoll.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom';


class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            item: [
                {
                    question: '',
                    options: [],
                    answer: ''
                }
            ]
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
                    question: this.q,
                    options: [this.oa,this.ob,this.oc,this.od],
                    answer: ''

                }
            
        })
        
    }
    render() {
        return (
            <div>
                <form >
                    <label>Question</label>
                    <input style={{ width: '100%' }} type='text' ref={this.ref} onChange={this.fillQues} />
                    <ol type='a'>
                        <li><input ref={this.ref} onChange={this.fillOptionsA} /></li>
                        <li><input ref={this.ref} onChange={this.fillOptionsB} /></li>
                        <li><input ref={this.ref} onChange={this.fillOptionsC} /></li>
                        <li><input ref={this.ref} onChange={this.fillOptionsD} /></li>
                    </ol>
                    <Link  to="/"><input type='submit' value='Create' onClick={(e) => { this.props.handleSubmit(this.state.item) }}  onMouseDown={this.submitForm} /></Link>
                </form>
            </div>
        )
    }
}

export default CreatePoll;