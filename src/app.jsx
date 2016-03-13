import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import AppRoutes from './routes.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

require('./css/reset.css');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
    <Router
        history={hashHistory}>
        {AppRoutes}
    </Router>,
    document.getElementById('app')
);
