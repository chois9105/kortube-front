import * as React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export class Header extends React.Component {
    render() {
      return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Kortube is for learner to Korean
                </Typography>
            </Toolbar>
        </AppBar>
      )
    }
}