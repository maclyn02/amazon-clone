import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h2>CHECKOUT</h2>
          </Route>
          <Route path='/login'>
            <Header />
            <h2>Login</h2>
          </Route>
          <Route path=''>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
