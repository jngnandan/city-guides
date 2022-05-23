import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import Signup from './Components/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NotFound from './Components/NotFound';

function App() {
  return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
  );
}
export default App;
