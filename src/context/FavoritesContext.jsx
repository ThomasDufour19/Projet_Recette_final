// Favorites Context - Manages favorite recipes
// - Allows adding and removing recipes from favorites
// - Stores favorites in localStorage

import React, { createContext, useState, useEffect } from "react";

// Create Favorites context
export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  // Load favorite recipes from localStorage
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to add a recipe to favorites
  const addFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  // Function to remove a recipe from favorites
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== id));
  };

  return (
    // Provide favorites state and functions to child components
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
