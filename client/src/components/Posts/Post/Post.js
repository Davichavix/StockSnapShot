import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import Delete from '@material-ui/icons/Delete';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost } from "../../../actions/posts";

import useStyles from './styles';

const Post = ( {post, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
   <Card className={classes.card}>
     <CardMedia className={classes.media} image={post.selectedFile} title={post.company}/>
     <div className={classes.overlay}>
        <Typography variant="h6">{post.ticker}</Typography>
        <Typography variant="body2">{moment(post.createdAt).format('YYYY-MM-DD')}</Typography>
     </div>
     <div className={classes.overlay2}>
      <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
        <MoreHoriz fontSize="medium" />
      </Button>
     </div>
     <div className={classes.details}>
      <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
     </div>
     <Typography className={classes.title} variant="h5" gutterBottom>{post.company}</Typography>
     <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.thesis}</Typography>
     </CardContent>
     <CardActions className={classes.cardActions}>
      {/* Add position size functionality <Button size="small" color="primary" onClick={() => {dispatch(addSharesPost(post._id))}}>
        <AttachMoney fontSize="small" />
        SHS OWNED + 
        {post.sharesCount}
      </Button> */}
      <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
        <Delete fontSize="small" />
        Delete
      </Button>
     </CardActions>
   </Card>
  );
}

export default Post;