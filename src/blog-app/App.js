import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import Detail from './Detail';
import Create from "./Create";
import Footer from "./Footer";

function App() {
    return(
        <BrowserRouter>
        
            <Nav/>
            <Switch>
            
                <Route exact path="/" component={Posts} />
                <Route exact path="/read/:id" component={Detail} />
                <Route exact path="/newblog" component={Create } />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default App;