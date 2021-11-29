import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts'
import useStyles from './styles';
import sports from '/Users/bartminczuk/Flatiron/play-to-win-project/client/src/images/sports.jpeg'

const Post = ({post, setCurrentId}) => {
    
    const classes = useStyles();
    const dispatch = useDispatch()
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile || sports } player={post.player}/>
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                <Typography variant="h3"> {post.player} </Typography>
                
                <Typography variant="h5" color="inherit"> Game: {post.gameName}</Typography>
            

            </div> 
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=> {setCurrentId(post._id)}}> <MoreHorizIcon fontSize="medium"/></Button>
            </div>
               
            <div className={classes.details}>
                <Typography variant="body2" color="inherit"> Winner: {post.winner}</Typography>
            </div>
            
            <CardContent>
            <Typography  variant="body2" color="initial" component="p" gutterBottom> {post.note}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>

                    <ThumbUpAltIcon fontSize="small"/>
                    Like &nbsp;
                    {post.likeCount}
                    &nbsp;
                </Button>
                  <Button size="small" color="primary" onClick={()=> {dispatch(deletePost(post._id))}}>

                    <DeleteIcon fontSize="small"/>
                    Delete
                    
                </Button>

            </CardActions>

        </Card>


        
       
       
    );
}

export default Post;