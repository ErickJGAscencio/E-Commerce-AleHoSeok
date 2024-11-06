import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/organisms/Header"
import HomePage from "./components/pages/HomePage"
import AdminPage from './components/pages/AdminPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header />         */}
        <Routes>
        <Route path='*' element={<Navigate to="/home" />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App