import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <h2>CHECKOUT</h2>
          </Route>
          <Route path='/login'>
            <h2>Login</h2>
          </Route>
          <Route path=''>
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
{
  // localhost
}
{
  // localhost/login
}
{
  // localhost/checkout
}

export default App;
