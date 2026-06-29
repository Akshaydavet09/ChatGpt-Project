import { useContext } from "react";
import { MyContext } from "./MyContext";
import "./chat.css";
function Chat() {
    const { newChat, setNewChat } = useContext(MyContext);
    return <>
        <div className="chats">
 
            {newChat ? <h1 className="default-heading">What’s on the agenda today?</h1> : <div className="chat">
                <div className="user-msg">
                    <p>Hello</p>
                </div>
                <div className="ai-msg">
                    <p>Hi! how can i help you</p>

                </div>
            </div>}
        </div>



    </>
}
export default Chat;