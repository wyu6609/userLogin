import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Typography, Box } from "@mui/material";

const Home = () => {
  const [readmeContent, setReadmeContent] = useState("");

  // Fetch the README.md file
  useEffect(() => {
    fetch("/README.md")
      .then((response) => {
        console.log(response);
        response.text();
      })
      .then((text) => setReadmeContent(text))
      .catch((error) => console.error("Error fetching README:", error));
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography>{readmeContent}</Typography>
      </Box>
    </Container>
  );
};

export default Home;
