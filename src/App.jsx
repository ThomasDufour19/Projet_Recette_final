// App Component - Main entry point of the application
// - Sets up React Router for page navigation
// - Provides authentication and favorites context
// - Includes the Bootstrap Navbar and routes to different pages

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home page with recipe search
import RecipeDetail from "./pages/RecipeDetail"; // Recipe details page
import Favorites from "./pages/Favorites"; // Favorites page
import Login from "./pages/Login"; // Login page
import Navbar from "./components/Navbar"; // Navigation bar component
import AuthProvider from "./context/AuthContext.jsx"; // Provides authentication context
import FavoritesProvider from "./context/FavoritesContext.jsx"; // Provides favorites management
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function App() {
  return (
    // Authentication context wraps the entire app
    <AuthProvider>
      {/* Favorites context for managing saved recipes */}
      <FavoritesProvider>
        {/* Navigation bar and routing system */}
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Recipe details page */}
            <Route path="/favorites" element={<Favorites />} /> {/* Favorites page */}
            <Route path="/login" element={<Login />} /> {/* Login page */}
          </Routes>
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
