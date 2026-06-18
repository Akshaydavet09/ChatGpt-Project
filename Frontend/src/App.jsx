import './App.css'
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./ChatWindow.jsx"
import { MyContext } from "./MyContext.jsx"
import { useState } from 'react'


function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const providerValues = { prompt, setPrompt, reply, setReply };
  return <div className="App">
    <MyContext.Provider value={providerValues}>
      <Sidebar />
      <ChatWindow />
    </MyContext.Provider>
  </div>

}

export default App
