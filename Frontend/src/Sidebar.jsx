import { useEffect, useContext } from "react";
import { MyContext } from "./MyContext";
import "./Sidebar.css"
import { useState } from "react";
function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const { data, setData } = useContext(MyContext);
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

    return <div className="Sidebar">
        {/* butoon section  */}
        <button className="btn-sec">
            <img className="logo" src="./src/assets/blacklogo.png" alt="" />
            <i className="fa-solid fa-pen-to-square icon"></i>
        </button>

       
        <div className="recent" onClick={recent}>
          Recents<i className="fa-solid fa-angle-down drop-down" style={{display: isOpen ? "initial": "none"}}></i><i className="fa-solid fa-angle-right right-icon" style={{display: isOpen ? "none": "initial"}}></i>
        </div>
        {/* history sec   */}
        <div className="thread-sec">
            {data && data.map((obj) => {
                return  <div className="threads" style={{display: isOpen ? "initial": "none"}}>{obj.title}</div>
            })}
        </div>

        <div className="heading">
            By Akshay 🤍
        </div>

    </div>

}

export default Sidebar;