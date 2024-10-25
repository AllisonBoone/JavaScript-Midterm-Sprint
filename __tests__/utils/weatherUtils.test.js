const { Cuisines, Dishes } = require('../../utils/data');
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require('../../utils/restaurantUtils');

// Test got typeof menuItem, to check properties, price range, true/false of dailySpecial and generate menu item of specific cuisine.
describe('Restaurant Functions', () => {
  describe('generateRandomMenuItem', () => {
    // Test implementations go here
    it('should return an item from the menu with valid properties', () => {
      const cuisine = 'italian';
      const menuItem = generateRandomMenuItem(cuisine);

      expect(typeof menuItem).toBe('object');

      expect(menuItem).toHaveProperty('name');
      expect(menuItem).toHaveProperty('description');
      expect(menuItem).toHaveProperty('price');
      expect(menuItem).toHaveProperty('dailySpecial');

      const price = parseFloat(menuItem.price);
      expect(price).toBeGreaterThanOrEqual(5);
      expect(price).toBeLesserThanOrEqual(25);

      expect(typeof menuItem.dailySpecial).toBe('boolean');
    });

    it('Should generate an item from the menu with a specific cuisine', () => {
      const cuisine = 'italian';
      const menuItem = generateRandomMenuItem(cuisine);
      const cuisineDishes = Dishes[cuisine].map((dish) => dish.name);
      expect(cuisineDishes).toContain(menuItem.name);
    });
  });

  // Test
  describe('generateMenu', () => {
    // Test implementations go here
  });

  describe('selectRandomCuisine', () => {
    // Test implementations go here
  });
});
