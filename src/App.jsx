import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe"; // Import the new Add Recipe page
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-recipe" element={<AddRecipe />} /> {/* New Route */}
          </Routes>
        </div>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
