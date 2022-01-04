import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts';
import TableComponent from '../TableComponent';
import useStyles from '../../styles'
import {Container, Grow, Grid} from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'


const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Play To Win"
    })
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId])

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container  justifyContent="space-between" alignItems="stretch" spacing={3}>   
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        <div className="table"> 
                            <TableComponent/>
                        </div>
                    </Grid>
                     
                </Grid>
            </Container> 
          </Grow>
    )
}

export default Home
