import AppHeader from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/page/Dashboard';
import Research from './components/page/Research';
import Footer from './components/Footer';
import News from './components/page/News';
const BASE_URL = import.meta.env.BASE_URL; // Vite 환경 변수 사용

function App() {
  return (
    <Router basename={BASE_URL}>
      <div id="root">
        <AppHeader />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
