import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import cryptocurrency from './pages/Cryptocurrency';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/styles/Footer.css'
import about from "./pages/About";
import login from "./pages/Login";

function App() {
  return (

   <div className="App">
       <Router>
        <Navbar />
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/cryptocurrency" exact component={cryptocurrency}/>
               <Route path="/about" exact component={about}/>
               <Route path="/login" exact component={login}/>
           </Switch>
           <Footer />
       </Router>
   </div>
  );
}

export default App;
