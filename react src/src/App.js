import HomePage from "./components/homepage";
import ErrorPage from "./components/errorpage";
import LoginPage from './components/loginPage.js';
import './App.css';
import Registration from './components/registration.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateChatbot from "./components/chatbot";

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <header className="App-header">
       <div>
         <nav>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="register">register</Link></li>
               <LoginPage/>
           </ul>
         </nav>
       </div>
      </header>


        <body>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="register" element={<Registration/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </body>
        <CreateChatbot/>

    </div>
</BrowserRouter>
  );
}

export default App;
