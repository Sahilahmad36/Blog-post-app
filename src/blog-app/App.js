import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav";

import Detail from './Detail';
import Create from "./Create";
import Footer from "./Footer";
import Posts from "./Posts";

function App() {
    return(
        <BrowserRouter>
        
            <Nav />
            
            
        
                <Route exact path="/read/:id" component={Detail} />
                <Route exact path="/newblog" component={Create } />
        <Posts />
            <Footer />
        </BrowserRouter>
    )
}
export default App;