import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import MainPage from './pages/mainpage';


function App(){

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = '/' element={<MainPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );

}


export default App;
