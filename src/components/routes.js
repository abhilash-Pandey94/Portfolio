import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Header All comonent

import Resume from './Header/ResumePage';
import AbouteMe from './Header/AboutmePage';
import Project from './Header/ProjectPage';
import Contact from './Header/ContactPage';
import Home from './Header/HomePage';

class MainPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact strict component={Home} />
                <Route path='/resume' exact strict component={Resume} />
                <Route path='/about' exact strict component={AbouteMe} />
                <Route path='/contact' exact strict component={Contact} />
                <Route path='/project' exact strict component={Project} />
            </Switch>
        )
    }
}
export default MainPage;
