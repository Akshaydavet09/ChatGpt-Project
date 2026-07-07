import "./ChatWindow.css"
import { useContext } from "react";
import { MyContext } from "./MyContext";
import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";
import Chat from "./Chat"

function ChatWindow(){
return <>
    <div className="chat-window">
        <div className="navbar">
            <span className="chat-window-heading">A-GPT<i className="fa-solid fa-angle-down"></i></span>
            <div className="profile"><i className="fa-solid fa-user"></i>
            </div>
        </div>
        <Chat />
    </div >
</>
}

export default ChatWindow;
