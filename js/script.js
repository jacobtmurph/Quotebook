//Array containing an object with the info needed for each quote.
var quotes = [
  {
    quote: "...The jealous temper of mankind...has constantly made pursuit of new methods and systems no less perilous than the search after unknown land and seas;",
    source: "Niccolò Machiavelli",
    citation: "Discourses on Livy",
    year: 1531,
    tags: ["Wise", "European", "Books", "Innovation"]
  },
  {
    quote: "What, you egg?",
    source: "Shakespeare",
    citation: "MacBeth",
    year: 1606,
    tags: ["Random", "Funny", "Weird", "Theater"],
  },
  {
    quote: `Barry: 'What's your super power again?'
    Bruce: 'I'm rich.'`,
    source: "The Flash & Batman",
    citation: "Justice League",
    year: 2017,
    tags: ["Movie Culture", "Funny", "Batman", "Superheroes"],
    },
  {
    quote: "Raise the sail with your stronger hand.",
    source: "Japanese Proverb",
    tags: ["Strength", "Life", "Wise", "Orientel"]
  },
  {
    quote: "With great power comes great responsibility.",
    source: "Uncle Ben",
    tags: ["Movie Culture", "Sad", "SpiderMan", "Superheroes", "Over Used"],
  },
  {
    quote: "Education is what remains after one has forgotten what one learned in school.",
    source: "Albert Einstein",
    tags: ["Keep Learning", "Education", "School", "Wise"]
  }
];

//An array containing colors for the background change
backgroundColors = ["slategrey", "blue", "crimson", "#36b55c"];

//Changes the background color
function changeBackground(colors) {
  var color = Math.floor(Math.random() * (colors.length - 0 + 1));
  document.body.style.backgroundColor = colors[color];

  //Aditionally changes button bakground color.
  document.getElementById('loadQuote').style.backgroundColor = colors[color];
}

//Function to generate random quotes
function getRandomQuote(quote_array) {
  //Prints a Random number between 0 and the length of the quotes array
  var quote_index = Math.floor(Math.random() * (quotes.length - 0 + 1));
  return quotes[quote_index];
}

//Prints the quote to the page
/* Using Template Literals, printQuote checks to see if a citation and year are given.
  (This is to prervent weird element-contined whitespace issues on the frontend.)
  (The '?' and ':' symbols represent the 'if' and 'else' keywords respectively).
  If so, they are added to the HTML.
  Otherwise, they are omitted.
 */
function printQuote() {
  var quote = getRandomQuote(quotes);
  var output = `
  <p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}
    ${quote.citation ? `<span class="citation">${quote.citation}</span>` : ""}
    ${quote.year ? `<span class="year">${quote.year}</span>` : ""}
  </p>
  <br>
  <p class="tags">Tags: ${quote.tags.toString()}</p>
  `;

  //change background color & quote
  changeBackground(backgroundColors);
  document.getElementById('quote-box').innerHTML = output;
}

//Automatically prints first quote, then changes quote after 10 seconds:
printQuote()
window.setInterval(printQuote, 10000);


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
