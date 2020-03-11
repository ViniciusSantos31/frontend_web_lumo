import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import { isAuthenticated } from "./services/auth";

// Importando as pages
import SignUp from "./services"
import Login from "./pages/Login"

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render = {props => 
            
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to = {{pathname: "/", state: { from: props.location } }}/>
            )
        }
    />
);

const Routes = () => (

    <BrowserRouter>
    
        <Switch>

            <Route exact path = "/" component = {Login} />
            <Route exact path = "/register" component = {() => <h1>Model Register vem aqui</h1>} />
            <Route path = "/signup" component = {SignUp} />
            <PrivateRoute path = "/app" component = { () => <h1>App</h1>} />
            <Route path = "*" component = {() => <h1>Page Not Found</h1>} />

        </Switch>

    </BrowserRouter>

);

export default Routes;