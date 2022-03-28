import HomePage from "./components/homepage";
import ErrorPage from "./components/errorpage";
import LoginPage from './components/loginPage.js';
import './App.css';
import Registration from './components/registration.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateChatbot from "./components/chatbot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter >
       <div>
         <nav>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="login">login</Link></li>
             <li><Link to="register">register</Link></li>
           </ul>
         </nav>

         <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="login" element={<LoginPage/>}/>
           <Route path="register" element={<Registration/>}/>
           <Route path="*" element={<ErrorPage />} />
         </Routes>
       </div>
       </BrowserRouter>
      </header>
        <CreateChatbot/>
    </div>
  );
}

export default App;
