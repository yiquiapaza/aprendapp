import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import MoreVertSharp from '@material-ui/icons/MoreVertSharp';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  avatar: {
    backgroundColor: red[500]
  }
});
// TODO: add props with title, img url, description etc.
export const CardComponent = ({
  avatar,
  title,
  date,
  image,
  title_image,
  content,
  add_to_favorites,
  share
}) => {
  const classes = useStyles();
  console.log(classes);
  if (!classes) {
    return <div>Error</div>;
  } else {
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar arial-label='recipe' className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertSharp />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title={title_image}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label={add_to_favorites}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label={share}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
};
