import React, {useState} from 'react'
import useStyles from './styles';
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper  } from '@material-ui/core';

const Form = () => {
    const [postData, setPostData] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""})
    const classes = useStyles();

    const handleSubmit = () => {

    }


    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6"> Creating Posts</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onCHange={(e)=> setPostData({...postData, creator: e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onCHange={(e)=> setPostData({...postData, title: e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onCHange={(e)=> setPostData({...postData, message: e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onCHange={(e)=> setPostData({...postData, tags: e.target.value})}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
                <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;
