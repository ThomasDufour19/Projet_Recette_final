import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("https://tasty.p.rapidapi.com/recipes/get-more-info", {
          params: { id },
          headers: {
            "X-RapidAPI-Key": "VOTRE_CLE_API",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
          },
        });
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <Container>
      <Card className="mt-4">
        <Card.Img variant="top" src={recipe.thumbnail_url} alt={recipe.name} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description || "No description available."}</Card.Text>
          <Button variant="success">Add to Favorites</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RecipeDetail;
