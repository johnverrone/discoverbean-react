import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import NewPostDialog from './new-post';

export default class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            tagline: props.tagline,
            avatar: props.avatar,
            newPostOpen: false,
            roastValue: 1
        };
    }

    handleOpenNewPost = () => this.setState({newPostOpen: true});

    handleCloseNewPost = () => this.setState({newPostOpen: false});

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title={this.state.name}
                        subtitle={this.state.tagline}
                        avatar={this.state.avatar}
                        />
                    <CardText>
                        suhdue
                    </CardText>
                    <CardActions>
                        <FlatButton
                            label="New Post"
                            onTouchTap={this.handleOpenNewPost}/>
                    </CardActions>
                </Card>
                <NewPostDialog
                    closeHandler={this.handleCloseNewPost}
                    open={this.state.newPostOpen}
                />
            </div>
        );
    }
}
