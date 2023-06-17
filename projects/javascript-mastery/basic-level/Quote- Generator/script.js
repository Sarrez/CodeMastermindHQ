// Array of quotes
const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    }
  ];
  
  // Function to generate random quote
  function generateQuote() {
    // Get a random quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    // Update the quote display
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = `"${randomQuote.text}" - ${randomQuote.author}`;
  }
  
  // Event listener for the "New Quote" button
  const newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", generateQuote);
  
  // Generate an initial quote on page load
  generateQuote();
  