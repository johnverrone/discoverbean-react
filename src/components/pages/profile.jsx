import React from 'react';
import Banner from '../banner';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                style={{
                    margin: '0 auto',
                    width: '60%'
                }}
                >
                <Banner name="John Verrone" tagline="Coffee Connoisseur" avatar="http://lorempixel.com/100/100/nature/"/>
            </div>
        );
    }
}
