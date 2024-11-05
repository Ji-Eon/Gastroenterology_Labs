import { useState } from 'react'
import AppHeader from './components/Header/Header'
import styles from './App.module.scss'
function App() {
  return (
    <div id="root">
      <AppHeader />
      <div className="main-content">
        {/* 메인 콘텐츠 추가 */}
        <h1>Welcome to Gastroenterology AI Lab</h1>
        <p>Explore our research, publications, and solutions.</p>
      </div>
    </div>
  )
}

export default App
