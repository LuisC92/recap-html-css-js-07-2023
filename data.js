const recipes = [
    {
      name: "Crock Pot Roast",
      ingredients: [
        {
          quantity: "1",
          name: " beef roast",
          type: "Meat"
        },
        {
          quantity: "1 package",
          name: "brown gravy mix",
          type: "Baking"
        },
        {
          quantity: "1 package",
          name: "dried Italian salad dressing mix",
          type: "Condiments"
        },
        {
          quantity: "1 package",
          name: "dry ranch dressing mix",
          type: "Condiments"
        },
        {
          quantity: "1/2 cup",
          name: "water",
          type: "Drinks"
        }
      ],
      steps: [
        "Place beef roast in crock pot.",
        "Mix the dried mixes together in a bowl and sprinkle over the roast.",
        "Pour the water around the roast.",
        "Cook on low for 7-9 hours."
      ],
      timers: [0, 0, 0, 420],
      imageURL:
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_iw/v1/img/recipes/27/20/8/Rc280CiJRRKBnugrSzJN_crockpot-roast-4645.jpg",
      originalURL: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
    },
    {
      name: "Roasted Asparagus",
      ingredients: [
        {
          quantity: "1 lb",
          name: " asparagus",
          type: "Produce"
        },
        {
          quantity: "1 1/2 tbsp",
          name: "olive oil",
          type: "Condiments"
        },
        {
          quantity: "1/2 tsp",
          name: "kosher salt",
          type: "Baking"
        }
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Cut off the woody bottom part of the asparagus spears and discard.",
        'With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.",string.", and if you eat asparagus you know what I mean by that).',
        "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
        "Sprinkle with salt.",
        "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
        "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
        "They should be tender when pierced with the tip of a knife.",
        "The tips of the spears will get very brown but watch them to prevent burning.",
        "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
      ],
      timers: [0, 0, 0, 0, 0, 0, 10, 0, 0, 0],
      imageURL:
        "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_iw/v1/img/recipes/50/84/7/Gd03ylZXTqiVz5vS5JJ4_untitled-0809.jpg",
      originalURL: "http://www.food.com/recipe/roasted-asparagus-50847"
    },
    {
      name: "Big Night Pizza",
      ingredients: [
        {
          quantity: "5 teaspoons",
          name: "yeast",
          type: "Baking"
        },
        {
          quantity: "5 cups",
          name: "flour",
          type: "Baking"
        },
        {
          quantity: "4 tablespoons",
          name: "vegetable oil",
          type: "Baking"
        },
        {
          quantity: "2 tablespoons",
          name: "sugar",
          type: "Baking"
        },
        {
          quantity: "2 teaspoons",
          name: "salt",
          type: "Baking"
        },
        {
          quantity: "2 cups",
          name: "hot water",
          type: "Misc"
        },
        {
          quantity: "1/4 cup",
          name: "pizza sauce",
          type: "Misc"
        },
        {
          quantity: "3/4 cup",
          name: "mozzarella cheese",
          type: "Dairy"
        }
      ],
      steps: [
        "Add hot water to yeast in a large bowl and let sit for 15 minutes.",
        "Mix in oil, sugar, salt, and flour and let sit for 1 hour.",
        "Knead the dough and spread onto a pan.",
        "Spread pizza sauce and sprinkle cheese.",
        "Add any optional toppings as you wish.",
        "Bake at 400 deg Fahrenheit for 15 minutes.",
        "Enjoy!"
      ],
      timers: [15, 60, 0, 0, 0, 15, 0],
      imageURL:
        "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg"
    },
    {
      name: "Cranberry and Apple Stuffed",
      ingredients: [
        {
          quantity: "2",
          name: "acorn squash",
          type: "Produce"
        },
        {
          quantity: "1",
          name: "boiling water",
          type: "Drinks"
        },
        {
          quantity: "2",
          name: "apples chopped into 1.4 inch pieces",
          type: "Produce"
        },
        {
          quantity: "1/2 cup",
          name: "dried cranberries",
          type: "Produce"
        },
        {
          quantity: "1 teaspoon",
          name: "cinnamon",
          type: "Baking"
        },
        {
          quantity: "2 tablespoons",
          name: "melted butter",
          type: "Dairy"
        }
      ],
      steps: [
        "Cut squash in half, remove seeds.",
        "Place squash in baking dish, cut-side down.",
        "Pour 1/4-inch water into dish.",
        "Bake for 30 minutes at 350 degrees F.",
        "In large bowl, combine remaining ingredients.",
        "Remove squash from oven, fill with mix.",
        "Bake for 30-40 more minutes, until squash tender.",
        "Enjoy!"
      ],
      timers: [0, 0, 0, 30, 0, 0, 30, 0],
      imageURL:
        "http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg",
      originalURL: ""
    },
    {
      name: "Mic's Yorkshire Puds",
      ingredients: [
        {
          quantity: "200g",
          name: "plain flour",
          type: "Baking"
        },
        {
          quantity: "3",
          name: "eggs",
          type: "Dairy"
        },
        {
          quantity: "300ml",
          name: "milk",
          type: "Dairy"
        },
        {
          quantity: "3 tbsp",
          name: "vegetable oil",
          type: "Condiments"
        }
      ],
      steps: [
        "Put the flour and some seasoning into a large bowl.",
        "Stir in eggs, one at a time.",
        "Whisk in milk until you have a smooth batter.",
        "Chill in the fridge for at least 30 minutes.",
        "Heat oven to 220C/gas mark 7.",
        "Pour the oil into the holes of a 8-hole muffin tin.",
        "Heat tin in the oven for 5 minutes.",
        "Ladle the batter mix into the tin.",
        "Bake for 30 minutes until well browned and risen."
      ],
      timers: [0, 0, 0, 30, 0, 0, 5, 0, 30],
      imageURL:
        "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg",
      originalURL:
        "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg"
    },
    {
      name: "Old-Fashioned Oatmeal",
      ingredients: [
        {
          quantity: "1 cup",
          name: "raisins",
          type: "Produce"
        },
        {
          quantity: "1",
          name: "cup water",
          type: "Drinks"
        },
        {
          quantity: "3/4 cup",
          name: "shortening",
          type: "Baking"
        },
        {
          quantity: "1 1/2 cups",
          name: "sugar",
          type: "Baking"
        },
        {
          quantity: "2 1/2 cups",
          name: "flour",
          type: "Baking"
        },
        {
          quantity: "1 tsp.",
          name: "soda",
          type: "Baking"
        },
        {
          quantity: "1 tsp.",
          name: "salt",
          type: "Baking"
        },
        {
          quantity: "1 tsp.",
          name: "cinnamon",
          type: "Baking"
        },
        {
          quantity: "1/2 tsp.",
          name: "baking powder",
          type: "Baking"
        },
        {
          quantity: "1/2 tsp.",
          name: "cloves",
          type: "Baking"
        },
        {
          quantity: "2 cups",
          name: "oats",
          type: "Baking"
        },
        {
          quantity: "1/2 cup",
          name: "chopped nuts",
          type: "Baking"
        }
      ],
      steps: [
        "Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.",
        "Drain raisins, reserving the liquid.",
        "Add enough water to reserved liquid to measure 1/2 cup.",
        "Heat oven to 400°.",
        "Mix thoroughly shortening, sugar, eggs and vanilla.",
        "Stir in reserved liquid.",
        "Blend in remaining ingredients.",
        "Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.",
        "Bake 8 to 10 minutes or until light brown.",
        "About 6 1/2 dozen cookies."
      ],
      timers: [15, 0, 0, 0, 0, 0, 0, 0, 8, 0],
      imageURL:
        "http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg",
      originalURL: "#"
    },
    {
      name: "Blueberry Oatmeal Squares",
      ingredients: [
        {
          quantity: "2-1/2 cups",
          name: "rolled oats, (not instant)",
          type: "Baking"
        },
        {
          quantity: "1-1/4 cups",
          name: "all-purpose flour",
          type: "Baking"
        },
        {
          quantity: "1 tbsp",
          name: "grated orange rind",
          type: "Produce"
        },
        {
          quantity: "1/4 tsp",
          name: "salt",
          type: "Baking"
        },
        {
          quantity: "1 cup",
          name: "cold butter, cubed",
          type: "Baking"
        },
        {
          quantity: "3/4 cup",
          name: "packed brown sugar",
          type: "Baking"
        },
        {
          quantity: "3 cups",
          name: "fresh blueberries",
          type: "Produce"
        },
        {
          quantity: "1/2 cup",
          name: "granulated sugar",
          type: "Baking"
        },
        {
          quantity: "1/3 cup",
          name: "orange juice",
          type: "Produce"
        },
        {
          quantity: "4 tsp",
          name: "cornstarch",
          type: "Baking"
        }
      ],
      steps: [
        "Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes.",
        "Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute.",
        "Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour.",
        "In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs.",
        "Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling.",
        "Bake in centre of 350°F oven until light golden, about 45 minutes.",
        "Let cool on rack before cutting into squares.",
        "(Make-ahead: Cover and refrigerate for up to 2 days or overwrap with heavy-duty foil and freeze for up to 2 weeks.)"
      ],
      timers: [10, 1, 60, 0, 0, 45, 0, 0],
      imageURL:
        "https://salu-salo.com/wp-content/uploads/2013/08/Blueberry-Oatmeal-Squares-3.jpg",
      originalURL:
        "http://www.canadianliving.com/food/blueberry_oatmeal_squares.php"
    },
    {
      name: "Curried chicken salad",
      ingredients: [
        {
          quantity: "3",
          name: "skinless, boneless chicken breasts, halved lengthwise",
          type: "Meat"
        },
        {
          quantity: "1/2 cup",
          name: "mayonnaise",
          type: "Baking"
        },
        {
          quantity: "1 tbsp",
          name: "lemon zest",
          type: "Produce"
        },
        {
          quantity: "1 tbsp ",
          name: "lemon juice",
          type: "Produce"
        },
        {
          quantity: "1 1/2 tsp",
          name: "curry powder",
          type: "Baking"
        },
        {
          quantity: "1/4 tsp",
          name: "salt",
          type: "Baking"
        },
        {
          quantity: "2",
          name: "ripe mangoes, diced",
          type: "Produce"
        },
        {
          quantity: "1/4 cup",
          name: "dried cranberries",
          type: "Produce"
        },
        {
          quantity: "2",
          name: "green onions, thinly sliced",
          type: "Produce"
        },
        {
          quantity: "1",
          name: "celery stalk, finely chopped",
          type: "Produce"
        },
        {
          quantity: "6 leaves",
          name: "Boston lettuce",
          type: "Produce"
        },
        {
          quantity: "6",
          name: "English muffins, toasted",
          type: "Misc"
        }
      ],
      steps: [
        "ARRANGE chicken in a single layer in a large pot.",
        "Add water to just cover.",
        "Bring to a boil over medium-high.",
        "Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.",
        "Cool.",
        "STIR mayo with lemon zest, juice, curry and salt in large bowl.",
        "Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.",
        "Divide among muffins with lettuce leaves",
        "Sandwich with tops"
      ],
      timers: [0, 0, 0, 6, 0, 0, 0, 0, 0],
      imageURL:
        "http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg",
      originalURL:
        "http://www.chatelaine.com/recipe/stovetop-cooking-method/curried-chicken-salad/"
    },
    {
      name: "Spring celebration salad",
      ingredients: [
        {
          quantity: "300g",
          name: "Jersey Royal new potatoes",
          type: ""
        },
        {
          quantity: "1",
          name: "mint sprig",
          type: ""
        },
        {
          quantity: "2",
          name: "eggs",
          type: ""
        },
        {
          quantity: "200g",
          name: "asparagus",
          type: ""
        },
        {
          quantity: "50g",
          name: "fresh peas",
          type: ""
        },
        {
          quantity: "4 tbsp",
          name: "mayonnaise",
          type: ""
        },
        {
          quantity: "1",
          name: "green apple",
          type: ""
        },
        {
          quantity: "3",
          name: "spring onions",
          type: ""
        },
        {
          quantity: "1 tsp",
          name: "capers",
          type: ""
        },
        {
          quantity: "2 tbsp",
          name: "olive oil",
          type: ""
        },
        {
          quantity: "1 tbsp",
          name: "white wine vinegar",
          type: ""
        },
        {
          quantity: "1",
          name: "Little Gem lettuce",
          type: ""
        },
        {
          quantity: "3-4 handfuls of",
          name: "soft herbs",
          type: ""
        }
      ],
      steps: [
        "Heat oven to 200C/180C fan/gas 6. Drizzle the bread with some olive oil and season, then roast in the oven, turning halfway through, for 12-15 mins or until crisp and golden. Once baked, rub with the raw garlic and break or cut into croutons.",
        "Bring a pan of water to boil. Add the potatoes, mint and 1 tsp salt and simmer for 15 mins until the potatoes are tender. Don’t be afraid of overcooking them – they’re far better tender than chalky. Drain the potatoes and discard the mint sprig.",
        "Meanwhile, bring another pan of water to the boil and lower the eggs into the water. Bring back to the boil and cook for 6 mins. Drain, then run the eggs under cold water to cool. Tap the eggs on the work surface and peel.",
        "Bring another pan of salted water to the boil. Chop the asparagus spears into three and boil in the water for 3-4 mins until just tender. Scoop out with a slotted spoon and refresh in cold water. Bring the water back to the boil and add a pinch of sugar. Add the peas to the water and cook until tender (about 2-3 mins). Drain.",
        "Toss the potatoes with 2 tbsp mayo and the apple, spring onions and capers. Whisk the olive oil and white wine vinegar together, season, then dress the lettuce and soft herbs along with the asparagus and peas. Spread the remaining mayo across your plate, top with the potatoes and dressed salad, halve the eggs and add more mayo, if you like. Garnish with the croutons and extra herbs."
      ],
      timers: [],
      imageURL:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spring-celebration-salad-7fece08.jpg?quality=90&webp=true&resize=440,400",
      originalURL: ""
    },
    {
      name: "Coconut & squash dhansak",
      ingredients: [
        {
          quantity: "1 tbsp",
          name: "vegetable oil",
          type: ""
        },
        {
          quantity: "500g",
          name: "butternut squash",
          type: ""
        },
        {
          quantity: "100g",
          name: "frozen chopped onions",
          type: ""
        },
        {
          quantity: "4 heaped tbsp",
          name: "mild curry paste",
          type: ""
        },
        {
          quantity: "400g can",
          name: "chopped tomatoes",
          type: ""
        },
        {
          quantity: "400g can",
          name: "light coconut milk",
          type: ""
        },
        {
          quantity: "mini naan",
          name: "bread",
          type: ""
        },
        {
          quantity: "400g can",
          name: "lentils",
          type: ""
        },
        {
          quantity: "200g bag",
          name: "baby spinach",
          type: ""
        },
        {
          quantity: "150ml",
          name: "coconut yogurt",
          type: ""
        }
      ],
      steps: [
        "Heat the oil in a large pan. Put the squash in a bowl with a splash of water. Cover with cling film and microwave on High for 10 mins or until tender. Meanwhile, add the onions to the hot oil and cook for a few mins until soft. Add the curry paste, tomatoes and coconut milk, and simmer for 10 mins until thickened to a rich sauce.",
        "Warm the naan breads in a low oven or in the toaster. Drain any liquid from the squash, then add to the sauce with the lentils, spinach and some seasoning. Simmer for a further 2-3 mins to wilt the spinach, then stir in the coconut yogurt. Serve with the warm naan and a dollop of extra yogurt."
      ],
      timers: [],
      imageURL:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-a3a9133.jpg?quality=90&webp=true&resize=600,545",
      originalURL: ""
    },
    {
      name: "Slow cooker vegetable curry",
      ingredients: [
        {
          quantity: "400ml can",
          name: "light coconut milk",
          type: ""
        },
        {
          quantity: "1",
          name: "mint sprig",
          type: ""
        },
        {
          quantity: "2",
          name: "eggs",
          type: ""
        },
        {
          quantity: "200g",
          name: "asparagus",
          type: ""
        },
        {
          quantity: "50g",
          name: "fresh peas",
          type: ""
        },
        {
          quantity: "4 tbsp",
          name: "mayonnaise",
          type: ""
        },
        {
          quantity: "1",
          name: "green apple",
          type: ""
        },
        {
          quantity: "3",
          name: "spring onions",
          type: ""
        },
        {
          quantity: "1 tsp",
          name: "capers",
          type: ""
        },
        {
          quantity: "2 tbsp",
          name: "olive oil",
          type: ""
        },
        {
          quantity: "1 tbsp",
          name: "white wine vinegar",
          type: ""
        },
        {
          quantity: "1",
          name: "Little Gem lettuce",
          type: ""
        },
        {
          quantity: "3-4 handfuls of",
          name: "soft herbs",
          type: ""
        }
      ],
      steps: [
        "Put the coconut milk, curry paste, bouillon powder, chilli, ginger, garlic, butternut squash, pepper and aubergine into the slow cooker pot and stir well. Cover with the lid and chill overnight.",
        "Cook on low for 6 hrs until the vegetables are really tender, then stir in the coriander and defrosted peas. The heat of the curry should be enough to warm them through. Taste and add a good squeeze of lime juice, if you fancy extra zing. Serve with a wholemeal flatbread."
      ],
      timers: [],
      imageURL:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/slow-cooker-vegetable-curry-2b72ddd.jpg?quality=90&webp=true&resize=440,400",
      originalURL: ""
    }
  ];
  
  export default recipes;