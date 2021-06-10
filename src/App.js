import './App.css';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Navigation from './Components/Navigation'
import Cart from './Pages/Cart'
import Single from './Pages/Single'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          {/* <Route path="/About" component={About}></Route> */}
          <Route path="/Products" component={Products}></Route>
          <Route path="/products/1" exact component={Single}></Route>
          <Route path="/Cart" component={Cart}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;