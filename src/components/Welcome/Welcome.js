import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
const Welcome = () => {
  const classes = useStyles(useStyles);
  return (
    <div className={classes.root}>
      <h1> Welcome dudes !!!</h1>
    </div>
  );
};

export default Welcome;
