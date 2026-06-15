import "./ChatWindow.css"
import { useContext } from "react";
const {prompt, setPrompt, reply, setReply} = useContext(MyContext);
import { MyContext } from "./MyContext";
function ChatWindow() {
    function changeFunc(event){
        event.preventDefault();
        setPrompt(event.target.value);
    }



    return <div className="chat-window">
        <div className="navbar">
            <span className="chat-window-heading">A-GPT<i class="fa-solid fa-angle-down"></i></span>
            <div className="profile"><i class="fa-solid fa-user"></i>
            </div>
        </div>
        <div className="chat-input">
                <form action="http://localhost:8080/chat" method="post">
            <div className="input">
                    <input type="text" placeholder="Ask Anything" name="message" onChange={changeFunc}/>
                    <div className="send-btn">
                        <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                        
                    </div>


            </div>
                </form>
            <p>A-GPT can make mistakes. Check important info. See Cookie Prefrences.</p>
        </div>

    </div >
}

export default ChatWindow;