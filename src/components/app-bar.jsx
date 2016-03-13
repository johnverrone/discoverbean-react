import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Colors from 'material-ui/lib/styles/colors';

export default class MainAppBar extends React.Component {

    constructor(props) {
        super(props);
    }

    handleRequestChangeLink = (event, value) => window.location = value;

    render() {
        return (
            <AppBar
                title="Discoverbean"
                style={{
                    backgroundColor: Colors.grey900,
                    textAlign: 'center'
                }}
                titleStyle={{
                    fontWeight: '300'
                }}
                showMenuIconButton={false}
                onTitleTouchTap={() => window.location = '/#/home'}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        onChange={this.handleRequestChangeLink}
                        >
                        <MenuItem primaryText='Profile' value='/#/profile' />
                        <MenuItem primaryText='Sign out' value='/#/home' />
                    </IconMenu>
                }
                />
        );
    }
}
