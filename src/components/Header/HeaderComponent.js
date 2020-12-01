import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
        <AppBar pasition='static'>
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
              <Link to='/'>Aprendapp</Link>
            </Typography>

            <Link className={classes.loginButton} to='/login'>
              <AccountCircleIcon> </AccountCircleIcon> Login
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    );
};
