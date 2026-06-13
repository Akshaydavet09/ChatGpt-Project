import "./ChatWindow.css"
function ChatWindow(){
    return <div className="chat-window">
        <div className="navbar">
        <span className="chat-window-heading">A-GPT<i class="fa-solid fa-angle-down"></i></span>
        <div className="profile"><i class="fa-solid fa-user"></i>
        </div>
        </div>
         <div className="chat-input">
            <div className="input">
                <input type="text" placeholder="Ask Anything"/>
                <div className="send-btn">
                <i class="fa-solid fa-paper-plane"></i>
                </div>

            </div>
            <p>A-GPT can make mistakes. Check important info.</p>
        </div>

    </div>
}

export default ChatWindow;