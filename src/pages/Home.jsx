import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
    const storedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    setRecipes((prevRecipes) => [...storedRecipes, ...prevRecipes]); // aide GPT
  }, []);

  // Fetch recipes from the API
  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://tasty.p.rapidapi.com/recipes/list", {
        params: { q: query },
        headers: {
          "X-RapidAPI-Key": "YOUR_ACTUAL_API_KEY", // Replace with your API key
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        }, // Aide GPT
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Search for recipes
  const searchRecipes = () => {
    fetchRecipes();
  };

  return (
    <Container>
      <h1 className="text-center my-4">Recipe List</h1>
      {/* Search bar */}
      <Form className="d-flex mb-4">
        <Form.Control
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="primary" className="ms-2" onClick={searchRecipes}>
          Search
        </Button>
      </Form>
      {/* "Add Recipe" Button */}
      <Button variant="success" className="mb-3" onClick={() => navigate("/add-recipe")}>
        Add Recipe
      </Button>
      {/* Display Recipes */}
      <Row>
        {recipes.map((recipe) => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.thumbnail_url} alt={recipe.name} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-outline-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
