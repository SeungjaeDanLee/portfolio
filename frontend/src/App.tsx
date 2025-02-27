import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Main Portfolio Routes */}
        <Route
          path="/"
          element={
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
              <Header />
              <div className="mx-auto">
                <Index />
                <Profile />
                <Skills />
                <Projects />
                <Career />
                <Contact />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
