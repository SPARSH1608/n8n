import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import { useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';

function App() {
  const isAuthenticated = useAuth().isAuthenticated;
console.log("isAuthenticated:", isAuthenticated);
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="/dashboard"
 element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />}
      />
 
    </Routes>
  );
}

export default App;
