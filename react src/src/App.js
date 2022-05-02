import HomePage from "./components/homepage";
import ErrorPage from "./components/errorpage";
import LoginPage from './components/loginPage.js';
import './App.css';
import Registerpage from './components/registerpage.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChatBotDisplay from "./components/Tom/chatbotDisplay";


function App() {
  return (
<BrowserRouter>
    <div className="App">
      <header className="App-header">
       <div>
         <nav>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="register">Register</Link></li>
             <LoginPage/>
           </ul>
         </nav>
       </div>
      </header>
        <body>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="register" element={<Registerpage/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </body>
        <ChatBotDisplay/>

    </div>
</BrowserRouter>
  );
}

export default App;
