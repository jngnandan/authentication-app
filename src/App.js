import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from "./components/Cart";

import Header from "./components/Header"
import Home from "./components/Home"
import LoginForm from "./components/LoginForm"
import Products from "./components/Products";
import NotFound from "./components/NotFound";


const App = () => <div>
    <Router>
        <Header />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/products"><Products /></Route>
            <Route exact path="/cart"><Cart /></Route>
            <Route exact path="/login"><LoginForm /></Route>
            <Route path="*"><NotFound /></Route>
        </Switch>
    </Router>
</div>

export default App
