import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MatchedImages from './MatchedImages';
import Pinned from './Pinned';

// import About from './About';

const About = () => {
    return (
        <about>
            <Switch>
                <Route path='/pinned' component={Pinned} />
                <Route path='/all' component={MatchedImages} />
            </Switch>
        </about>
    );
}

export default About;
