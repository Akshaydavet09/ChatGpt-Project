import "./ChatWindow.css"
import { useContext } from "react";
import { MyContext } from "./MyContext";
import { useEffect } from "react";
function ChatWindow() {
    const {prompt, setPrompt, reply, setReply} = useContext(MyContext);
    function changeFunc(event){
        event.preventDefault();
        setPrompt(event.target.value);
    }
    useEffect(()=>{
         console.log(prompt);
    }, [prompt])
   async function getReply(question){
        let options = {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                threadId: 129,
                message: prompt
            })
        }
        let response = await fetch("http://localhost:8080/chat", options);
        let reply = await response.json();
        console.log(response);
    }

    return <div className="chat-window">
        <div className="navbar">
            <span className="chat-window-heading">A-GPT<i className="fa-solid fa-angle-down"></i></span>
            <div className="profile"><i className="fa-solid fa-user"></i>
            </div>
        </div>
        <div className="chat-input">
             <div className="input">
                    <input type="text" placeholder="Ask Anything" name="message" onChange={changeFunc}/>
                    <div className="send-btn">
                        <button onClick={getReply}><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            <p>A-GPT can make mistakes. Check important info. See Cookie Prefrences.</p>
        </div>

    </div >
}

export default ChatWindow;