import { useContext } from "react";
import { MyContext } from "./MyContext";
import "./chat.css";
function Chat() {
    const { newChat, setNewChat, prevChats, setPrevChats } = useContext(MyContext);
    return <>
        <div className="chats">

            {newChat ? <h1 className="default-heading">What’s on the agenda today?</h1> :


                <div className="chat">

                    { prevChats && prevChats.map((item) => {
                        if (item.role === "user") {
                            return <>
                                <div className="user-msg">
                                    <p>{item.content}</p>
                                </div>
                            </>
                        }
                        else {
                            return <>
                                <div className="ai-msg">
                                    <p>{item.content}</p>
                                </div>
                            </>
                        }
                    })
                    }
                </div>

            }
        </div >



    </>
}
export default Chat;


