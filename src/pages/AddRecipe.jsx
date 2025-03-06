import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function AddRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  // Function to add a new recipe
  const handleAddRecipe = () => {
    if (!name || !description || !imageUrl) {
      alert("Please fill all fields.");
      return;
    }

    // Get existing recipes from localStorage
    const storedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    
    // Create new recipe object
    const newRecipe = {
      id: Date.now(), // Unique ID
      name,
      description,
      thumbnail_url: imageUrl, // Image URL
    };

    // Save the updated recipes in localStorage
    const updatedRecipes = [...storedRecipes, newRecipe];
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));

    // Redirect to Home page
    navigate("/");
  };

  return (
    <Container>
      <h1 className="text-center my-4">Add a New Recipe</h1>
      <Form>
        <Form.Group>
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </Form.Group>

        <Button variant="success" className="mt-3" onClick={handleAddRecipe}>
          Save Recipe
        </Button>
      </Form>
    </Container>
  );
}

export default AddRecipe;
