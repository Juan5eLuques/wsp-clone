import { Route, Routes } from 'react-router-dom'
import { ChatProvider } from './context/ChatProvider'
import { Layout } from './components/Layout/Layout'
import { Login } from './components/Login/Login'
import { HomeContent } from './pages/HomePage/HomeContent'
import { ChatContent } from './pages/ChatPage/ChatContent'
import './App.css'

function App() {
  return (
    <ChatProvider>
      <Login />
      <Layout>
        <Routes>
          <Route path='/' element={<HomeContent />}/>
          <Route path='/contacts/:contact_id' element={<ChatContent />}/>
        </Routes>
      </Layout>
    </ChatProvider>
  )
}

export default App
