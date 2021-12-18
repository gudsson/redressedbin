import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import BinInstructions from './components/BinInstructions'
import BinDisplay from './components/BinDisplay'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/inspect/bin/:binId">
            <BinDisplay />
          </Route>
          <Route path="/newbin">
            <BinInstructions />
          </Route>
          <Route path="/">
            <Jumbotron />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
