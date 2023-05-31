import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import './output.css';

import Signup from './pages/signup';
// Colors: black, white and red

function App(){

  return (
   
    <Router>
      <div className = "title">
        <Routes>
          <Route exact path = '/' element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
  );

}


export default App;
