import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  loginButton: {
    color: 'white'
  }
}));

export const HeaderComponent = () => {
  const classes = useStyles();
  console.log(classes);
  if (!classes) {
    return <div>Error</div>;
  } else
    return (
      <header className={classes.root}>
        <AppBar position='relative'>
          <Toolbar>
            <IconButton
              edge='start'
              className='{classes.menuButton}'
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>

            <Typography variant='h6' className='{classes.title}'>
              Aprendapp
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </header>
    );
};
