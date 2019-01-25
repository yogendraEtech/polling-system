import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CreatePoll from './CreatePoll';
import ViewPoll from './ViewPoll';
import TakePoll from './TakePoll';
import PollingMenu from './PollingMenu';
import './PollingSystem.scss';

class PollingSystem extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                {
                    id: 1,
                    question: 'Who is or was your the favourite Prime Minister of India' + '?',
                    options: ['Jawahar lal nehru', 'Indira Gandhi', 'Narendra Modi', 'Atal bihari vajpeyi'],
                    answer: ''
                },
                {
                    id: 2,
                    question: 'Who is or was your the favourite Marvel superhero' + '?',
                    options: ['Ironman', 'Spiderman', 'Hulk', 'Thor'],
                    answer: ''
                }
            ]
        }
    }
    handleSubmit = (data) => {
        this.setState({
            item: [...this.state.item, data]
        })
    }
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path="/" component={PollingMenu} />
                        <Route exact path="/createPoll" render={() => <CreatePoll handleSubmit={(data) => this.handleSubmit(data)} />} />
                        <Route exact path="/viewPoll" render={() => <ViewPoll item={this.state.item} />} />
                        <Route exact path="/takePoll/:id" component={TakePoll} />} />
                        <Route render={() => 'Page Not Found'} />
                    </Switch>
                    <div>
                        <Link to='/' className='back'>Back</Link>
                    </div>

                </div>
            </Router>

        )
    }
}

export default PollingSystem;