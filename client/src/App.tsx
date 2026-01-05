import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import CompanyQuestions from './pages/CompanyQuestions'
import MockInterview from './pages/MockInterview'
import Analysis from './pages/Analysis'
import History from './pages/History'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/company/:companyId" element={<CompanyQuestions />} />
          <Route path="/mock/:companyId/:category" element={<MockInterview />} />
          <Route path="/analysis/:sessionId" element={<Analysis />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
