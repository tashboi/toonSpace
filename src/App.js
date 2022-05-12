import HomePage from "./components/homepage";
import ErrorPage from "./components/errorpage";
import ChatbotImg from  "./img/chatbot.png"
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ChatBotDisplay from "./components/Tom/chatbotDisplay";
import React, { useState } from 'react';
import Eventspage from "./components/Kris/eventspage";
import Header from "./components/Kris/header";
import Footer from "./components/Kris/footer";
import Registration from "./components/Daniel/registration";
import ThreadPage from "./components/Daniel/threadPage";
import Eventsfeed from "./components/Mahdi/Eventsfeed";


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
            <Route path="eventsfeed" element={<Eventsfeed/>}/>
        </Routes>
        <div id="ChatbotPosition" >
            {
                show? <ChatBotDisplay />
                    : <img src={ChatbotImg} onClick={()=>setShow(!show)} />
            }

        </div>
        </body>

        <Footer/>

    </div>
</HashRouter>
  );
}

export default App;
