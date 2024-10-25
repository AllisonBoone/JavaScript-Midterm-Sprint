const Restaurants = [
  {
    name: 'The Gourmet Bistro',
    id: 'the-gourmet-bistro',
    city: 'Happy Valley-Goose Bay',
  },
  {
    name: 'Spicy Kitchen',
    id: 'spicy-kitchen',
    city: 'Marystown',
  },
  {
    name: 'Healthy Eats',
    id: 'healthy-eats',
    city: "St. John's",
  },
  {
    name: 'Comfort Diner',
    id: 'comfort-diner',
    city: 'Corner Brook',
  },
  {
    name: 'Sweet Tooth Bakery',
    id: 'sweet-tooth-bakery',
    city: 'Gander',
  },
];

const Cuisines = ['italian', 'indian', 'chinese', 'vegan', 'mexican'];

//Dishes generated courtesy of ChatGPT, I have absolutely no idea if these are real dishes, or if the descriptions are correct.
const Dishes = {
  italian: [
    {
      name: 'Spaghetti Carbonara',
      description:
        'Classic Roman pasta with eggs, cheese, pancetta, and pepper.',
    },
    {
      name: 'Margherita Pizza',
      description:
        'Simple pizza topped with tomato, mozzarella, and fresh basil.',
    },
    {
      name: 'Lasagna',
      description: 'Layers of pasta with meat sauce, béchamel, and cheese.',
    },
    {
      name: 'Risotto',
      description:
        'Creamy Arborio rice cooked with broth, flavored with saffron.',
    },
    {
      name: 'Tiramisu',
      description:
        'Coffee-flavored dessert with layers of mascarpone and cocoa.',
    },
    {
      name: 'Penne Arrabbiata',
      description: 'Pasta in a spicy tomato sauce with garlic and chili.',
    },
    {
      name: 'Fettuccine Alfredo',
      description: 'Creamy pasta dish with butter and Parmesan cheese.',
    },
    {
      name: 'Bruschetta',
      description:
        'Toasted bread topped with diced tomatoes, garlic, and basil.',
    },
    {
      name: 'Caprese Salad',
      description:
        'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.',
    },
    {
      name: 'Gnocchi',
      description: 'Soft potato dumplings served with various sauces.',
    },
    {
      name: 'Pesto Pasta',
      description: 'Pasta tossed with basil pesto, garlic, and pine nuts.',
    },
    {
      name: 'Osso Buco',
      description: 'Braised veal shanks cooked with vegetables and broth.',
    },
    {
      name: 'Ribollita',
      description: 'Tuscan soup made with bread, beans, and vegetables.',
    },
    {
      name: 'Bolognese Sauce',
      description:
        'Rich meat sauce made with ground beef, tomatoes, and herbs.',
    },
    {
      name: 'Arancini',
      description: 'Fried rice balls filled with cheese or meat.',
    },
    {
      name: 'Panna Cotta',
      description:
        'Creamy dessert made with sweetened cream thickened with gelatin.',
    },
    {
      name: 'Saltimbocca',
      description: 'Veal wrapped in prosciutto and sage, cooked in white wine.',
    },
    {
      name: 'Focaccia',
      description: 'Flat oven-baked bread topped with herbs and olive oil.',
    },
    {
      name: 'Cioppino',
      description: 'Seafood stew made with fish, shellfish, and tomato broth.',
    },
    {
      name: 'Cacciucco',
      description: 'Tuscan fish stew with various seafood and bread.',
    },
  ],
  chinese: [
    {
      name: 'Sweet and Sour Pork',
      description: 'Pork cooked in a tangy sweet and sour sauce.',
    },
    {
      name: 'Kung Pao Chicken',
      description: 'Spicy stir-fried chicken with peanuts and vegetables.',
    },
    {
      name: 'Spring Rolls',
      description: 'Crispy rolls filled with vegetables and sometimes meat.',
    },
    {
      name: 'Peking Duck',
      description: 'Crispy-skinned duck served with pancakes and hoisin sauce.',
    },
    {
      name: 'Mapo Tofu',
      description: 'Spicy tofu dish with minced meat and chili bean paste.',
    },
    {
      name: 'Chow Mein',
      description: 'Stir-fried noodles with vegetables and meat or tofu.',
    },
    {
      name: 'Dumplings',
      description:
        'Stuffed dough pockets, steamed or fried, often filled with meat or vegetables.',
    },
    {
      name: 'Hot Pot',
      description:
        'Dish where ingredients are cooked in a simmering pot of broth at the table.',
    },
    {
      name: 'Fried Rice',
      description: 'Stir-fried rice with vegetables, eggs, and choice of meat.',
    },
    {
      name: 'Egg Foo Young',
      description: 'Omelet filled with vegetables and meat, served with gravy.',
    },
    {
      name: 'Char Siu',
      description: 'Cantonese roasted pork with a sweet and savory glaze.',
    },
    {
      name: 'Wonton Soup',
      description: 'Soup with wontons filled with meat or shrimp.',
    },
    {
      name: 'Ma Po Tofu',
      description: 'Tofu in a spicy sauce with minced meat and scallions.',
    },
    {
      name: 'Szechuan Pepper Chicken',
      description: 'Spicy chicken stir-fried with Szechuan peppercorns.',
    },
    {
      name: 'Beef and Broccoli',
      description: 'Stir-fried beef with broccoli in a savory sauce.',
    },
    {
      name: 'Sesame Chicken',
      description: 'Fried chicken in a sweet sesame sauce.',
    },
    {
      name: 'Mongolian Beef',
      description: 'Beef stir-fried with green onions and soy sauce.',
    },
    {
      name: 'Chili Garlic Shrimp',
      description: 'Shrimp cooked with garlic and chili sauce.',
    },
    {
      name: 'Buddha Bowl',
      description: 'Healthy bowl with grains, vegetables, and proteins.',
    },
  ],
  vegan: [
    {
      name: 'Chickpea Salad',
      description: 'Fresh salad with chickpeas, tomatoes, and cucumber.',
    },
    {
      name: 'Vegan Tacos',
      description: 'Tacos filled with seasoned lentils and avocado.',
    },
    {
      name: 'Quinoa Bowl',
      description: 'Healthy bowl with quinoa, veggies, and tahini dressing.',
    },
    {
      name: 'Cauliflower Wings',
      description: 'Spicy baked cauliflower florets served with dipping sauce.',
    },
    {
      name: 'Vegan Burger',
      description: 'Plant-based burger served with lettuce and tomato.',
    },
    {
      name: 'Lentil Soup',
      description: 'Hearty soup made with lentils, vegetables, and spices.',
    },
    {
      name: 'Stuffed Bell Peppers',
      description: 'Bell peppers filled with quinoa, beans, and vegetables.',
    },
    {
      name: 'Zucchini Noodles',
      description: 'Spiralized zucchini tossed with marinara sauce.',
    },
    {
      name: 'Falafel Wrap',
      description:
        'Falafel balls wrapped in pita with lettuce and tahini sauce.',
    },
    {
      name: 'Vegan Pad Thai',
      description: 'Stir-fried rice noodles with vegetables and peanuts.',
    },
    {
      name: 'Avocado Toast',
      description: 'Toasted bread topped with smashed avocado and seasonings.',
    },
    {
      name: 'Coconut Curry',
      description: 'Creamy curry made with coconut milk and vegetables.',
    },
    {
      name: 'Vegan Mac and Cheese',
      description: 'Creamy pasta dish made with cashew cheese.',
    },
    {
      name: 'Chia Seed Pudding',
      description: 'Pudding made with chia seeds and almond milk.',
    },
    {
      name: 'Roasted Veggie Bowl',
      description: 'Bowl with roasted seasonal vegetables and grains.',
    },
    {
      name: 'Banana Pancakes',
      description: 'Fluffy pancakes made with ripe bananas and oats.',
    },
    {
      name: 'Peanut Butter Banana Smoothie',
      description: 'Smoothie made with banana and peanut butter.',
    },
    {
      name: 'Tofu Stir-fry',
      description: 'Stir-fried tofu with vegetables and soy sauce.',
    },
    {
      name: 'Ratatouille',
      description: 'Stewed vegetable dish with zucchini, eggplant, and tomato.',
    },
  ],
  mexican: [
    {
      name: 'Tacos al Pastor',
      description: 'Tacos filled with marinated pork and pineapple.',
    },
    {
      name: 'Guacamole',
      description: 'Creamy avocado dip served with tortilla chips.',
    },
    {
      name: 'Chiles en Nogada',
      description: 'Stuffed peppers topped with walnut sauce.',
    },
    {
      name: 'Tamales',
      description: 'Corn dough filled with meat and wrapped in corn husks.',
    },
    {
      name: 'Mole Poblano',
      description:
        'Rich sauce made with chocolate and spices, served over chicken.',
    },
    {
      name: 'Quesadilla',
      description:
        'Flour tortilla filled with cheese and grilled until melted.',
    },
    {
      name: 'Sopes',
      description: 'Thick corn tortillas topped with beans, meat, and salsa.',
    },
    {
      name: 'Fajitas',
      description: 'Grilled meat served with sautéed peppers and onions.',
    },
    {
      name: 'Chimichangas',
      description: 'Deep-fried burritos filled with meat and cheese.',
    },
    {
      name: 'Enchiladas',
      description:
        'Tortillas filled with meat or cheese, rolled and topped with sauce.',
    },
    {
      name: 'Ceviche',
      description:
        'Seafood marinated in lime juice and mixed with onions and cilantro.',
    },
    {
      name: 'Elote',
      description:
        'Grilled corn on the cob topped with mayonnaise, cheese, and chili powder.',
    },
    {
      name: 'Pozole',
      description:
        'Hearty soup made with hominy and meat, garnished with cabbage.',
    },
    {
      name: 'Tortilla Soup',
      description: 'Tomato-based soup with tortillas, avocado, and cheese.',
    },
    {
      name: 'Burrito',
      description:
        'Flour tortilla filled with rice, beans, and choice of meat.',
    },
    {
      name: 'Churros',
      description: 'Fried dough pastry rolled in sugar and cinnamon.',
    },
    { name: 'Flan', description: 'Creamy caramel custard dessert.' },
    {
      name: 'Agua Fresca',
      description: 'Refreshing fruit drink made with water and sugar.',
    },
  ],
  indian: [
    {
      name: 'Pani Puri',
      description:
        'Crispy puris filled with spiced water, tamarind chutney, and potatoes.',
    },
    {
      name: 'Masala Dosa',
      description:
        'Thin rice crepe filled with spiced potato filling, served with chutney and sambar.',
    },
    {
      name: 'Idli',
      description:
        'Steamed rice cakes often served with sambar and coconut chutney.',
    },
    {
      name: 'Vada',
      description:
        'Savory doughnuts made from fermented lentils, often served with sambar.',
    },
    {
      name: 'Bhindi Masala',
      description: 'Stir-fried okra cooked with onions, tomatoes, and spices.',
    },
    {
      name: 'Rajma',
      description: 'Red kidney beans cooked in a spiced tomato gravy.',
    },
    {
      name: 'Kofta Curry',
      description: 'Spiced meat or vegetable balls served in a rich curry.',
    },
    {
      name: 'Fish Curry',
      description:
        'Tangy and spicy curry made with fresh fish and coconut milk.',
    },
    {
      name: 'Aloo Paratha',
      description:
        'Stuffed flatbread filled with spiced mashed potatoes, served with yogurt or pickle.',
    },
    {
      name: 'Baingan Bharta',
      description:
        'Roasted eggplant mashed and cooked with onions, tomatoes, and spices.',
    },
    {
      name: 'Paneer Butter Masala',
      description: 'Paneer cubes cooked in a creamy tomato sauce.',
    },
    {
      name: 'Pesarattu',
      description: 'Green gram (moong dal) crepes served with ginger chutney.',
    },
    {
      name: 'Chicken Chettinad',
      description:
        'Fiery chicken curry made with a variety of spices from the Chettinad region.',
    },
    {
      name: 'Gajar Ka Halwa',
      description: 'Sweet carrot pudding cooked with milk, ghee, and sugar.',
    },
    {
      name: 'Pappadum',
      description:
        'Thin, crispy wafers made from lentil flour, often served as an accompaniment to meals.',
    },
    {
      name: 'Keema',
      description:
        'Minced meat curry, often made with lamb or goat, cooked with peas and spices.',
    },
    {
      name: 'Pulao',
      description:
        'Fragrant rice dish cooked with vegetables, meat, and spices.',
    },
    {
      name: 'Methi Thepla',
      description:
        'Flatbread made with fenugreek leaves and spices, popular in Gujarat.',
    },
    {
      name: 'Sev Puri',
      description:
        'Crispy puris topped with diced potatoes, onions, chutneys, and sev (crunchy noodles).',
    },
    {
      name: 'Rasgulla',
      description:
        'Soft, spongy cheese balls soaked in sugar syrup, a popular Bengali dessert.',
    },
  ],
};

module.exports = {
  Cuisines,
  Dishes,
  Restaurants,
};
