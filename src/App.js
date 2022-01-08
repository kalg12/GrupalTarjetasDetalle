import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./style.css";
import { Navbar } from './components/Navbar';
import { Nosotros } from './components/Nosotros';
import { Peliculas } from './components/Peliculas';
import { Inicio } from './components/Inicio';
import { DetallePelicula } from './components/DetallePelicula';


function App() {

  return (
    <Router>
       <Navbar />
       <div className='container'>
       <Switch>
       <Route path='/nosotros'>
          <Nosotros />
      </Route>
       <Route path='/peliculas'>
          <Peliculas />
      </Route>

      <Route path="/detallepelicula/:id/:nombre/:desc/:img">
        <DetallePelicula />
      </Route>
      <Route path="/">
        <Inicio />
      </Route>
      
       </Switch>
       </div>
    </Router>

  );
  
}

export default App;