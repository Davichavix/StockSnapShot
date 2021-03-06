import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyles from './styles';
import { createPost, updatePost, getCurrentPrice } from '../../actions/posts'
import {useDispatch, useSelector} from 'react-redux'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    ticker: '',
    company: '',
    thesis:'',
    tags: '',
    selectedFile:''
  })

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(currentId) {
      dispatch(updatePost(currentId, postData)).then(() => clear());
    } else {
      dispatch(createPost(postData)).then(() => clear());
    }
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      ticker: '',
      company: '',
      thesis:'',
      tags: '',
      selectedFile:''
    })
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Snapshot</Typography>
        <TextField name="ticker" variant="outlined" label="Ticker" fullWidth value={postData.ticker} onChange={(e) => setPostData({ ...postData, ticker: e.target.value})}/>
        <TextField name="company" variant="outlined" label="Company" fullWidth value={postData.company} onChange={(e) => setPostData({ ...postData, company: e.target.value})}/>
        <TextField name="thesis" variant="outlined" label="Thesis" fullWidth value={postData.thesis} onChange={(e) => setPostData({ ...postData, thesis: e.target.value})}/>
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
        <div className ={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;