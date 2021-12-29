import React from 'react'

const Home = () => {
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
