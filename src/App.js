import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Navigate,Route,Routes,} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Post from './components/Post';
import Address from './components/Address';
import Subject from './components/Subject';


function App() {
  return (
    <div>
      <Router>
      <Navbar/> 
          <Routes>
          <Route path="/" element={<Navigate to="/hello" />} />
              <Route path="/hello/*" element={<Home/>}>
              <Route path="world" element={<p>This is world!</p>} />
              </Route>
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path='/address' element={<Address/>}/>
              <Route path='/subject' element={<Subject/>}/>
              <Route path="/post/:name" element={<Post/>} />

              <Route path="*" element={<NotFound/>} />
          </Routes>
      </Router>
    </div>
    
    
  );
}

export default App;
