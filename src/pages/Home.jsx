import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": "VOTRE_CLE_API",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">Search for Recipes</h1>
      <Form className="d-flex mb-4">
        <Form.Control type="text" placeholder="Search by name or ingredients..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button variant="primary" className="ms-2" onClick={searchRecipes}>Search</Button>
      </Form>
      <Row>
        {recipes.map((recipe) => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={recipe.thumbnail_url} alt={recipe.name} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-outline-primary">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
