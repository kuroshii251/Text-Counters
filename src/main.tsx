import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WordCounterPage from './page/wordcounter.tsx'
import GameCounterPage from './page/gamecounter.tsx'
import SocialMediaCounterPage from './page/socialmediacounter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
            <Route path='/word-counter' element={<WordCounterPage/>}/>
           <Route path='/game-counter' element={<GameCounterPage/>}/>
            <Route path='/socialmedia-counter' element={<SocialMediaCounterPage/>}/>



      </Routes>
      </BrowserRouter>
  </StrictMode>
)
