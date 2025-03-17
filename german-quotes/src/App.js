import './App.css';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the quotes from the JSON file
import quotesData from './quotes.json'; // Adjust the path if needed

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Haal een willekeurige quote op bij het laden van de component
    getRandomStaticQuote();

    // Stel een interval in om elke 20 seconden de quote bij te werken (20000 milliseconden)
    const interval = setInterval(() => {
      getRandomStaticQuote();
    }, 20000); // 20 seconds

    // Maak het interval schoon wanneer de component wordt ontkoppeld
    return () => clearInterval(interval);
  }, []);

  // Haal een willekeurige quote uit de statische lijst
  function getRandomStaticQuote() {
    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Card className='bg-light'>
        <Card.Body className='text-center my-4'>
          <Card.Text>
            "{quote}"
          </Card.Text>
          <Card.Text className='text-end'>
            --- {author}
          </Card.Text>
          <Button
            className='bg-primary mt-3'
            onClick={() => {
              // Manually update the quote on button click
              getRandomStaticQuote();
            }}
          >
            Nieuwe Quote
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;