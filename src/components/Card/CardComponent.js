import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
// TODO: add props with title, img url, description etc.
export const CardComponent = () => {
  const classes = useStyles();
  if (!classes) {
    return (
      <Card className={classes.root}>
        {/*<CardActionArea></CardActionArea>*/}
      </Card>
    );
  } else {
    <div>Error</div>;
  }
};
