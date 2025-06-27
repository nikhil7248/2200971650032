import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Log } from './middleware/logger';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [logMessage, setLogMessage] = useState('');

  // Log the successful loading of the app
  useEffect(() => {
    Log({
      level: 'info',
      pkg: 'component',
      message: 'App loaded successfully',
    }).then((data) => setLogMessage(data?.message || 'No message returned from log')); // Set the initial log message
  }, []);

  // Handle form submission and URL shortening
  const handleSubmit = async () => {
    // Basic validation to check if the URL field is filled
    if (!longUrl) {
      setLogMessage('Please enter a valid long URL');
      return;
    }

    try {
      const response = await fetch('http://20.244.56.144/evaluation-service/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          longUrl,
          validTill: validity ? parseInt(validity) : undefined,
          customCode: shortcode || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Shortened URL: ${data.shortUrl}`);
        const logData = await Log({
          level: 'info',
          pkg: 'component',
          message: 'URL shortened successfully',
        });
        setLogMessage(logData?.message || 'No message returned from log'); // Update log message on success
      } else {
        throw new Error(data.message || 'URL shortening failed');
      }
    } catch (error) {
      setLogMessage(`Error: ${error.message}`); // Update log message on failure
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      
      {/* Long URL input */}
      <TextField
        fullWidth
        required
        label="Long URL"
        margin="normal"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      
      {/* Validity input */}
      <TextField
        fullWidth
        label="Validity (minutes, optional)"
        margin="normal"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      
      {/* Custom shortcode input */}
      <TextField
        fullWidth
        label="Custom Shortcode (optional)"
        margin="normal"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      
      {/* Submit button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        style={{ marginTop: '1rem' }}
      >
        Shorten URL
      </Button>
      
      {/* Display log message (either success or error) */}
      {logMessage && (
        <div style={{ marginTop: '1rem', color: logMessage.startsWith('Error') ? 'red' : 'green' }}>
          <strong>Log:</strong> {logMessage}
        </div>
      )}
    </Container>
  );
}

export default App;










