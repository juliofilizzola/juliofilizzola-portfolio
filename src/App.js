import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './style/App/app.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contacts" component={ Contacts }/>
      </Switch>
    </div>
  );
}

export default App;
