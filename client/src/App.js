import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { gapi } from "gapi-script";

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

const App = () => {

    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            "871773938218-rh2bevcjq9qk3ei751b74hmfl5cae8k4.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });

    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path = "/" exact component={Home} />
                    <Route path = "/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App