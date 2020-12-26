import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path=''>
            <h2>MAIN</h2>
          </Route>
          <Route path='/checkout'>
            <h2>CHECKOUT</h2>
          </Route>
          <Route path='/login'>
            <h2>Login</h2>
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
