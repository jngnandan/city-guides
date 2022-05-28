import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';

import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { CompatRouter } from 'react-router-dom-v5-compat';

import NotFound from './Components/NotFound';
import TourDetails from './Components/TourDetails';
// import firebase from "firebase";

function App() {
  // const firebaseApp = firebase.apps[0];
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Login} />
        <Route exact path="/Tour/:id" component={TourDetails} />
        {/* <CompatRouter path="/Tour/:id/" component={TourDetails}/> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
