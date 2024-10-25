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
      expect(price).toBeLessThanOrEqual(25);

      expect(typeof menuItem.dailySpecial).toBe('boolean');
    });

    it('Should generate an item from the menu with a specific cuisine', () => {
      const cuisine = 'italian';
      const menuItem = generateRandomMenuItem(cuisine);
      const cuisineDishes = Dishes[cuisine].map((dish) => dish.name);
      expect(cuisineDishes).toContain(menuItem.name);
    });
  });

  // Test for properties, validate cuisine in cuisine list,validate items in array between 5-10, price range true/false of dailySpecial.
  describe('generateMenu', () => {
    // Test implementations go here
    it('Should return menu with cuisine and items in array', () => {
      const menu = generateMenu();

      expect(menu).toHaveProperty('cuisine');
      expect(menu).toHaveProperty('items');

      expect(Cuisines).toContain(menu.cuisine);

      expect(Array.isArray(menu.items)).toBe(true);
      expect(menu.items.length).toBeGreaterThanOrEqual(5);
      expect(menu.items.length).toBeLessThanOrEqual(10);

      menu.items.forEach((item) => {
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('description');
        expect(item).toHaveProperty('price');
        expect(item).toHaveProperty('dailySpecial');

        const price = parseFloat(item.price);
        expect(price).toBeGreaterThanOrEqual(5);
        expect(price).toBeLessThanOrEqual(25);

        expect(typeof item.dailySpecial).toBe('boolean');
      });
    });
  });

  // Test for valid cuisine in specific cuisine list.
  describe('selectRandomCuisine', () => {
    // Test implementations go here
    it('Should return valid cuisine in Cuisines list', () => {
      const cuisine = selectRandomCuisine();
      expect(Cuisines).toContain(cuisine);
    });
  });
});
