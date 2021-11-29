import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({player: '', gameName: '', note: '', winner: '', selectedFile: ''})
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
        
        dispatch(createPost(postData))
        }
        clear();
    }


    const clear = () => {
        setCurrentId(null);
        setPostData({player: '', gameName: '', note: '', winner: '', selectedFile: ''});
    }


    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`}onSubmit={handleSubmit}>
                <Typography variant="h6"> {currentId ? 'Editing' : 'Logging'} a Game </Typography>
                <TextField name="player" variant="outlined" label="Player" fullWidth value={postData.player} onChange={(e)=> setPostData({...postData, player: e.target.value})}/>
                <TextField name="gameName" variant="outlined" label="Game Played" fullWidth value={postData.gameName} onChange={(e)=> setPostData({...postData, gameName: e.target.value})}/>
                <TextField name="note" variant="outlined" label="Note" fullWidth value={postData.note} onChange={(e)=> setPostData({...postData, note: e.target.value})}/>
                <TextField name="winner" variant="outlined" label="Winner(s)" fullWidth value={postData.winner} onChange={(e)=> setPostData({...postData, winner: e.target.value.split(',') })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;
