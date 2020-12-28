import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from '../StateProvider';
import { useEffect } from 'react';
import { auth } from '../firebase';

function App() {

  const [, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      //CLEANUP
      unsubscribe()
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/login'>
            <Login />
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
