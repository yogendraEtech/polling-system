import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'tls';

class EditPoll extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state)
        const rowss = this.props.location.state.find((m) => m.id = this.props.match.params.id);
        const rows = [rowss].map((m) => {
            console.log(m)
            this.state = {
                item: [
                    {
                        id: m.id,
                        question: m.question,
                        options: [m.options[0], m.options[1], m.options[2], m.options[3]],
                        answer: ''
                    }
                ]
            }
        });
    }

    fillQues = (event) => {
        console.log(this.state)
        this.setState({
            item: [
                {
                    question: (event.target.value),
                    options: [, , ,]
                }
            ]
        })
    }
    fillOptionsA = (event) => {
        this.setState({
            item: [
                {
                    options: [(event.target.value), , ,]
                }
            ]
        })
    }
    fillOptionsB = (event) => {
        this.setState({
            item: [
                {
                    options: [, (event.target.value), ,]
                }
            ]
        })
    }
    fillOptionsC = (event) => {
        this.setState({
            item: [
                {
                    options: [, , (event.target.value),]
                }
            ]
        })
    }
    fillOptionsD = (event) => {
        this.setState({
            item: [
                {
                    options: [, , , (event.target.value)]
                }
            ]
        })
    }
    // submitForm = () => {
    //     this.setState({
    //         item:
    //         {
    //             id: this.key,
    //             question: this.q + '?',
    //             options: [this.oa, this.ob, this.oc, this.od],
    //             answer: ''
    //         }

    //     })

    // }
    render() {
        const rowss = this.props.location.state.find((m) => m.id = this.props.match.params.id);
        const rows = [rowss].map((m) => {
            return (
                <form className="form-group" key={m.id}>
                    <label><h4>Question</h4></label>
                    <input className="form-control" style={{ width: '100%' }} type='text' onChange={this.fillQues} value={this.state.item[0].question} />
                    <label><h5>Options</h5></label>
                    <ol type='A' >
                        <li><input type='text' className="form-control opt-input" value={this.state.item[0].options[0]} onChange={this.fillOptionsA} /></li>
                        <li><input className="form-control opt-input" value={this.state.item[0].options[1]} onChange={this.fillOptionsB} /></li>
                        <li><input className="form-control opt-input" value={this.state.item[0].options[2]} onChange={this.fillOptionsC} /></li>
                        <li><input className="form-control opt-input" value={this.state.item[0].options[3]} onChange={this.fillOptionsD} /></li>
                    </ol>
                    <Link to="/"><input className='btn btn-lg btn-success' type='submit' value='Edit Confirm' onClick={(e) => { this.props.handleEdit(this.state.item) }}  /></Link>
                </form>
            )
        })
        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default EditPoll;