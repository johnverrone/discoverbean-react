import React from 'react';
import MainAppBar from './app-bar';

export default class Master extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <MainAppBar />
                {this.props.children}
            </div>
        );
    }
}
