import './App.css'
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./ChatWindow.jsx"
import Mycontext from "./MyContext.jsx"
import { useState } from 'react'
const [prompt, setPrompt] = useState("");
const [reply, setReply] = useState("");
const providerValues = { prompt, setPrompt, reply, setReply };


function App() {
  return <div className="App">
    <MyContext.Provider values={ providerValues }>
      <Sidebar />
      <ChatWindow />
    </MyContext.Provider>
  </div>

}

export default App
