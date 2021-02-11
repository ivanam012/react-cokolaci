import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/onama';
import Product from './pages/kolaci';
import Forma from './pages/kontakt';
import Gde from './pages/gdeSmo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/onama" component={About} />
        <Route path="/kolaci" component={Product} />
        <Route path="/kontakt" component={Forma} />
        <Route path="/gdeSmo" component={Gde} />
      </Switch>
    </Router>
  );
}

export default App;
