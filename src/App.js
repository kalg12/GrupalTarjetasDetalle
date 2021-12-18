import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./style.css";
import { Navbar } from './components/Navbar';
import { Nosotros } from './components/Nosotros';


function App() {

  return (
    <Router>
       <Navbar />
       <div className='container'>
       <Switch>
       <Route path='/nosotros'>
          <Nosotros />
      </Route>
      
       </Switch>
       </div>
    </Router>

  );
  
}

export default App;