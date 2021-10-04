
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

import Teachers from './components/Teachers/Teachers';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';

import Allcourses from './components/Allcourses/Allcourses';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/AllCourses'>
            <Allcourses></Allcourses>
          </Route>
          <Route path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
