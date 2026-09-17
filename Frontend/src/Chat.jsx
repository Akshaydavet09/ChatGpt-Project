import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import MarkDown from "react-markdown";
import ChatInput from "./ChatInput";
import "./chat.css";
function Chat() {
    const { newChat, setNewChat, prevChats, setPrevChats, latestReply, setLatestReply, reply, setReply } = useContext(MyContext);
    useEffect(() => {
        if (!prevChats?.length) return;
        const array = reply.split(" ");
        let idx = 1;
        let intervalId = setInterval(() => {
            if (idx == array.length + 1) clearInterval(intervalId);
            setLatestReply(array.slice(0, idx).join(" "));
            console.log("in hook");
            idx++;
        }, 70);
    }, [prevChats]);
    return <>
        <div className="chats">

            {newChat ? <h1 className="default-heading">What’s on the agenda today?</h1> :


                <div className="chat">
                    {prevChats?.slice(0, -1).map((item) => {
                        return <>
                            <div className={item.role === "user" ? "user-msg" : "ai-msg"}>
                            <MarkDown>{item.content}</MarkDown>
                            </div>
                        </>
                    })}

                    {latestReply ? <div className="ai-msg">
                        <MarkDown>{latestReply}</MarkDown>
                    </div> : prevChats?.slice(-1).map((item) => {
                        return <>
                            <div className="ai-msg">
                                <MarkDown>{item.content}</MarkDown>
                            </div>
                        </>
                    })}

                </div>
            }
            <ChatInput></ChatInput>
        </div >



    </>
}
export default Chat;


//  <div className="user-msg">
//                                     <p>{item.content}</p>
//                                 </div>

//                                 <div className="ai-msg">
//                                 </div>