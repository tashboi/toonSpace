import HomePage from "./components/homepage";
import ErrorPage from "./components/errorpage";
import './App.css';
import Registerpage from './components/registerpage.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChatBotDisplay from "./components/Tom/chatbotDisplay";
import React, { useState } from 'react';
import Eventspage from "./components/Kris/eventspage";
import Header from "./components/Kris/header";
import Footer from "./components/Kris/footer";

function App() {
    const [show,setShow]=useState(false)
  return (
<BrowserRouter>
    <div className="App">
     <Header/>
        <body>
        <Routes>
            <Route path="events" element={<Eventspage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="register" element={<Registerpage/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </body>
        <div id="ChatbotPosition">
        {
            show? <ChatBotDisplay />
                :null
        }

        <button onClick={()=>setShow(!show)}>Toggle</button>
        </div>
        <Footer/>

    </div>
</BrowserRouter>
  );
}

export default App;
