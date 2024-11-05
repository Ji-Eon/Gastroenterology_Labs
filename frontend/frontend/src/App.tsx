import { useState } from 'react'
import AppHeader from './components/Header/Header'
import styles from './App.module.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/page/Dashboard';
import Research from './components/page/Research';
function App() {
  return (
    <Router>
      <div id="root">
        <AppHeader />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
