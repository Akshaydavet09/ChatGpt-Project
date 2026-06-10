import "./Sidebar.css"
function Sidebar(){
    return <div className="Sidebar">
        {/* butoon section  */}
        <button className="btn-sec">
            <img className="logo" src="./src/assets/blacklogo.png" alt=""/>
            <i className="icon" className="fa-solid fa-pen-to-square"></i>
        </button>

        {/* history sec  */}
        <ul>
            <li>History 1</li>
            <li>History 2</li>
            <li>History 3</li>
        </ul>

    </div>
    
}

export default Sidebar;