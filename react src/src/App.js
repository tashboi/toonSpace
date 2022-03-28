import logo from './logo.svg';
import LoginPage from './components/loginPage.js';
import Registration from './components/registration.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
           </ul>
         </nav>
         <Routes>
           <Route path="login" element={<LoginPage/>}/>
           <Route path="register" element={<Registration/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
