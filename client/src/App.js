
import React, {useEffect, useState} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from "react-redux";
import crown from './images/crown.png';
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import TableComponent from './components/TableComponent'
import NavBar from "./components/NavBar/NavBar";



const App = () => {
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
    <Container maxwidth="lg">
      <NavBar/>
   
       
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
    </Container>

    );
}

export default App;