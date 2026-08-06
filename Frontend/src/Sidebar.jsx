import { useEffect, useContext } from "react";
import { MyContext } from "./MyContext";
import "./Sidebar.css"
import { useState } from "react";
function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const { data, setData, prevChats, setPrevChats, newChat, setNewChat, newThreadId, setNewThreadId, uuidv4} = useContext(MyContext);
    useEffect(() => {
        async function getData() {
            let response = await fetch("http://localhost:8080/thread");
            let threadData = await response.json();
            console.log(threadData);
            setData(() => {
                return threadData;
            });
        }
        getData();
    }, []);
    function recent(){
        setIsOpen((prevVal)=>(
            prevVal === true ? false : true
        )
            
        );
    }
   async function historyClicked(idThread){ 
        setNewChat(false); 
        let response = await fetch(`http://localhost:8080/thread/${idThread}`);
        let data = await response.json();
        setPrevChats(data[0].messages);
        setNewThreadId(idThread);
    }
    function newChatClicked(){
        setPrevChats([]);
        setNewThreadId(uuidv4);
        setNewChat(true); 
    }
    return <div className="Sidebar">
        {/* butoon section  */}
        <button className="btn-sec" onClick={newChatClicked}>
            <img className="logo" src="./src/assets/blacklogo.png" alt="" />
            <i className="fa-solid fa-pen-to-square icon"></i>
        </button>

       
        <div className="recent" onClick={recent}>
          Recents<i className="fa-solid fa-angle-down drop-down" style={{display: isOpen ? "initial": "none"}}></i><i className="fa-solid fa-angle-right right-icon" style={{display: isOpen ? "none": "initial"}}></i>
        </div>
        {/* history sec   */}
        <div className="thread-sec">
            {data && data.map((obj) => {
                return  <div className="threads" style={{display: isOpen ? "initial": "none", backgroundColor: newThreadId == obj.threadId ? "#212121":""}} onClick={()=>{historyClicked(obj.threadId)}}>{obj.title}</div>
            })}
        </div>

        <div className="heading">
            By Akshay 🤍
        </div>

    </div>

}

export default Sidebar;