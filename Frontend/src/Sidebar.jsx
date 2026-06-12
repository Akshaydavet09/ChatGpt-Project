import "./Sidebar.css"
function Sidebar() {
    return <div className="Sidebar">
        {/* butoon section  */}
        <button className="btn-sec">
            <img className="logo" src="./src/assets/blacklogo.png" alt="" />
            <i className="fa-solid fa-pen-to-square icon"></i>
        </button>

        {/* history sec  */}
        <div className="thread-sec">
            <div className="threads">thread 1</div>
            <div className="threads">thread 2</div>
            <div className="threads">thread 3</div>

        </div>

        <div className="heading">
            By Akshay 🤍
        </div>

    </div>

}

export default Sidebar;