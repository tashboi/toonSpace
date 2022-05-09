import logo from './logo.svg';
import LoginPage from './components/loginPage.js';
import Registration from './components/registration.js';
import ThreadPage from './components/threadPage.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useContext, useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter >
       <div>
         <nav>
           <ul>
             <li><Link to="login">login</Link></li>
             <li><Link to="register">register</Link></li>
             <li><Link to="thread">threads</Link></li>
           </ul>
         </nav>
         <Routes>
           <Route path="login" element={<LoginPage/>}/>
           <Route path="register" element={<Registration/>}/>
           <Route path="thread" element={<ThreadPage/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
