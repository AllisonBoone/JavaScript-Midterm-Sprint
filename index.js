const { Restaurants, Cuisines } = require('./utils/data');
const express = require('express');
const path = require('path');
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require('./utils/restaurantUtils');

const app = express();
let restaurantData = {}; //This should be populated soon

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get('/', (request, response) => {
  const randomRestaurant =
    Restaurants[Math.floor(Math.random() * Restaurants.length)];
  const randomMenu = generateMenu();
  response.render('index', {
    restaurants: Restaurants,
    randomRestaurant,
    randomMenu,
  });
});

/**
 * GET /restaurant/:name
 * Displays a specific restaurant's random menu.
 * The cuisine is randomly selected and a menu is generated based on it.
 */
app.get('/restaurant', (request, response) => {
  const restaurantId = request.query.restaurantId;
  console.log(`restaurantId: ${restaurantId}`);
  //Get the restaurants menu, and then display the page
});

//Add any other required routes here

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
