import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CreatePoll from './CreatePoll';
import ViewPoll from './ViewPoll';
import TakePoll from './TakePoll';
import PollingMenu from './PollingMenu';

class PollingSystem extends React.Component {
    constructor() {
        super();
        this.state = {
            item: []

        }
    }
    handleSubmit = (data) => {
        this.setState({
            item: [...this.state.item, data]
        })
    }
    render() {
        console.log(this.state)
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path="/" component={PollingMenu} />
                        <Route exact path="/createPoll" render={() => <CreatePoll handleSubmit={(data) => this.handleSubmit(data)} />} />
                        <Route exact path="/viewPoll" render={() => <ViewPoll item={this.state.item} />} />
                        <Route exact path="/takePoll" component={TakePoll} />
                        <Route render={() => 'Page Not Found'} />
                    </Switch>
                    <div>
                        <Link to='/' >Back</Link>
                    </div>

                </div>
            </Router>

        )
    }
}

export default PollingSystem;