import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

export default class NewPostDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            handleClose: props.closeHandler,
            open: props.open,
            roastValue: 1
        };
    }

    handleRoastChange = (event, index, value) => this.setState({roastValue: value});

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.state.handleClose}
            />
        ];

        return (
            <Dialog
                title="New Post"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.state.handleClose}
                >
                Enter coffee information<br/>
                <TextField
                    hintText="Name"
                /><br/>
                <TextField
                    hintText="Location"
                /><br/>
                <TextField
                    hintText="Origin"
                /><br/>
                <SelectField value={this.state.roastValue} onChange={this.handleRoastChange}>
                    <MenuItem value={1} primaryText="Mild"/>
                    <MenuItem value={2} primaryText="Moderate"/>
                    <MenuItem value={3} primaryText="Intense"/>
                </SelectField>
                <DatePicker hintText="Review Date" />
            </Dialog>
        );
    }
}
