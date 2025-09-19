import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./components/Layout"

// Pages
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Credentials from "./pages/Credentials"
import Workflows from "./pages/Workflows"
import WorkflowEditor from "./pages/WorkflowEditor"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="credentials" element={<Credentials />} />
          <Route path="workflows" element={<Workflows />} />
          <Route path="workflows/:id" element={<WorkflowEditor />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
