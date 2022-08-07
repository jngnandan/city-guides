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
import Blogs from './Components/Blogs';
import Illustrations from './Components/Illustrations';
import Books from './Components/Books';
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
        <Route exact path="/Blogs" component={Blogs} />
        <Route exact path="/Books" component={Books} />
        {/* <CompatRouter path="/Tour/:id/" component={TourDetails}/> */}
        <Route exact path="/Illustrations" component={Illustrations} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
