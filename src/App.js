import HomePage from "./components/homepage";
import ErrorPage from "./components/errorpage";
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ChatBotDisplay from "./components/Tom/chatbotDisplay";
import React, { useState } from 'react';
import Eventspage from "./components/Kris/eventspage";
import Header from "./components/Kris/header";
import Footer from "./components/Kris/footer";
import Registration from "./components/Daniel/registration";
import ThreadPage from "./components/Daniel/threadPage";


function App() {
    const [show,setShow]=useState(false)
  return (
<HashRouter>
    <div className="App">
     <Header/>
        <body>
        <Routes>
            <Route path="events" element={<Eventspage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="register" element={<Registration/>}/>
            <Route path="thread" element={<ThreadPage/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div id="ChatbotPosition">
            {
                show? <ChatBotDisplay />
                    :null
            }

            <button onClick={()=>setShow(!show)}>Toggle</button>
        </div>
        </body>

        <Footer/>

    </div>
</HashRouter>
  );
}

export default App;
