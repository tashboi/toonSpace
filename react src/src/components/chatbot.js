import React from "react";
import chatbot from "./../img/chatbot.png"

class CreateChatbot extends React.Component {

    handleClick = () => {
        var div = document.getElementById("ChatBotDiv");
        var img =document.getElementById("ChatbotImg");

        if (div.style.display !== "block") {
            div.style.display = "block";
            img.style.display = "none";
        }
        else {
            div.style.display = "none";
            img.style.display = "block";
        }
    }

    render(){
        return(
            <div id="ChatbotPosition">
                <img id="ChatbotImg" src={chatbot} className="chatbot" alt="Chatbot Logo" onClick={this.handleClick} />
                <div id="ChatBotDiv" onClick={this.handleClick}>
                    CHATBOT GO HERE
                </div>
            </div>



        )
    }
}

export default CreateChatbot;