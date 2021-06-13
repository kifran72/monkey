import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


  
export default class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        classes: this.useStyles()
      };
  }

  useStyles = () => {
    return makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(0),
      },
      title: {
        flexGrow: 1,
      },
    }));
  }

  render() {
    return (
      <div className={this.state.classes.root}>
        <AppBar position="fixed">
            <Toolbar>
            <IconButton edge="start" className={this.state.classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.state.classes.title}>
                News
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
      </div>
    );
  }
}