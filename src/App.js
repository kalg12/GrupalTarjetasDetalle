import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';


function App() {
  return (
    <Router>  
    <Navbar />
    <Footer />
    </Router>
  );
}

export default App;