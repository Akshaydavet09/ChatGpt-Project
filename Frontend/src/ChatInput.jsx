import { useContext } from "react";
import { MyContext } from "./MyContext";
import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";
function ChatInput() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ececec");
    let [styles, setStyles] = useState({ position: "absolute", right: "70px", display: "none" });
    const { prompt, setPrompt, reply, setReply, prevChats, setPrevChats, newChat, setNewChat, newThreadId, setNewThreadId } = useContext(MyContext);
    function changeFunc(event) {
        event.preventDefault();
        setPrompt(event.target.value);
    }
    async function getReply() {
        setStyles((prevVal) => {
            return { ...prevVal, display: "initial" }
        });
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                threadId: newThreadId,
                message: prompt
            })
        }
        let response = await fetch("http://localhost:8080/chat", options);
        let replyAi = await response.json();
        setStyles((prevVal) => {
            return { ...prevVal, display: "none" }
        });
        if (replyAi) {
            setReply(replyAi);
            setPrevChats((prevVal) => {
                return [...prevVal, {
                    role: "user",
                    content: prompt
                }, {
                    role: "assistant",
                    content: replyAi
                }]
            });
            setPrompt("");
            setNewChat(false);
        }
    }
    function clicked(event){
        if(event.key == "Enter"){
            getReply();
        }
    }

    return <>
        <div className="chat-input">
            <div className="input">
                <input type="text" placeholder="Ask Anything" name="message" onChange={changeFunc} value={prompt} onKeyDown={clicked} />
                <div className="send-btn">
                    <button onClick={getReply}><i className="fa-solid fa-paper-plane"></i></button>
                </div>
                <ScaleLoader
                    color={color}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    style={styles}
                />
            </div>
            <div className="para"><p>A-GPT can make mistakes. Check important info.</p></div>
        </div></>
}
export default ChatInput;