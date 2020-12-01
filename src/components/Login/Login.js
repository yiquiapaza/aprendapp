import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5rem',
    marginLeft: '10rem'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '30ch'
  }
}));
const Login = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    user: '',
    password: '',
    showPassword: false
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <h1> Ingresar</h1>
      <form autoComplete='off'>
        <FormControl
          className={clsx(
            classes.margin,
            classes.withoutLabel,
            classes.textField
          )}
        >
          <Input
            id='standard-adornment-user'
            value={values.user}
            onChange={handleChange('user')}
            endAdornment={<InputAdornment position='end'>User</InputAdornment>}
            aria-describedby='standard-user-helper-text'
            inputProps={{
              'aria-label': 'user'
            }}
          />
          <FormHelperText id='standard-user-helper-text'>User</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor='standard-adornment-password'>
            Password
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant='outlined' color='primary'>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
