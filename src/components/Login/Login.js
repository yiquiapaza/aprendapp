import React, { useState, useContext } from 'react';
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
import StoreContext from '../../Context/StoreContext';
import { useHistory } from 'react-router-dom';
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

function initialState() {
  return {
    user: '',
    password: '',
    showPassword: false
  };
}

const Login = () => {
  const classes = useStyles(useStyles);
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }
  function loginEnter({ user, password }) {
    if (user === 'admin' && password === 'admin') {
      return { token: '1234' };
    }
    return { error: 'usuario no encontrado' };
  }
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClick = (event) => {
    event.preventDefault();
    const { token } = loginEnter(values);
    if (token) {
      setToken(token);
      return history.push('/welcome');
    }
    setValues(initialState);
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
            name='user'
            value={values.user}
            onChange={onChange}
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
            name='password'
            onChange={onChange}
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
        <Button variant='outlined' color='primary' onClick={handleClick}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
