import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
<<<<<<< HEAD
import "./style.css";
import { Navbar } from './components/Navbar';
import { Nosotros } from './components/Nosotros';
=======
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
>>>>>>> 5de10346fed87e02e5bd29d1463f1e0ec4e554d4


function App() {

  return (
<<<<<<< HEAD
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

=======
    <Router>  
    <Navbar />
    <Footer />
    </Router>
>>>>>>> 5de10346fed87e02e5bd29d1463f1e0ec4e554d4
  );
  
}

export default App;