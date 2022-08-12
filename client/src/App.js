import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Traveler Chronicles</Typography>
                <FontAwesomeIcon icon={faGlobeAsia} fontSize="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignContent="strech" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App