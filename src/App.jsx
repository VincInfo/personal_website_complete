import { Routes, Route } from 'react-router-dom';
import './style.css'

import Main from "./pages/Main/Main";
import ChatAI from "./pages/ChatAI/ChatAI";


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="chatAI" element={<ChatAI />} />
      </Routes>
    </div>
  )
}

export default App