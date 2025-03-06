import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <Container>
      <h1 className="text-center my-4">Your Favorite Recipes</h1>
      <Row>
        {favorites.length > 0 ? favorites.map((recipe) => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.thumbnail_url} alt={recipe.name} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Button variant="danger" onClick={() => removeFavorite(recipe.id)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        )) : <p>No favorites yet.</p>}
      </Row>
    </Container>
  );
}

export default Favorites;
