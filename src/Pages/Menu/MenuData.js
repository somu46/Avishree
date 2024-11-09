import Bronze from '../../Assets/bronze.png'
import Gold from '../../Assets/gold.png'
import Silver from '../../Assets/silver.png'
import Diamond from '../../Assets/Diamond.png'
import Platinum from '../../Assets/Platinum.png'
import Exclusive from '../../Assets/Exclusive.png'
import Royal from '../../Assets/Royal.png'





const menuData = [
    {
      name: "Bronze Package",
      price: "₹699 + 18% GST",
      image: Bronze,
      items: {
        Beverages: ["Assorted welcome drinks (4-5 variety)", "Black coffee", "Flat white coffee"],
        Soup: ["Chicken clear soup", "Veg clear soup"],
        "Non-veg Starter": ["Chicken 69"],
        "Veg Starter": ["Crispy corn"],
        Salads: ["Fresh green salad", "Russian salad", "Raita", "Pickle"],
        "Main Course": [
          "Peas Kochuri", "Steam rice", "Basonti Polao", 
          "Aloo dum", "Cholar dal", 
          "Doi kathala", "Mutton kasa"
        ],
        Dessert: ["Chatni", "Papad", "Rosogolla", "Sandesh"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Misti paan", "Jarda pan", "Sada paan"]
      }
    },
    {
      name: "Silver Package",
      image:Silver,
      price: "₹849 + 18% GST",
    //   image: "/images/silver-package.jpg",
      items: {
        Beverages: ["Assorted welcome drinks (5-6 variety)", "Black coffee", "Flat white coffee"],
        Soup: ["Chicken clear soup", "Veg clear soup"],
        "Non-veg Starter": ["Chicken kabab", "Crispy cheesy fish bite"],
        "Veg Starter": ["Chilly baby corn", "Paneer satay"],
        Salads: ["Fresh green salad", "Russian salad", "Pickle", "Raita"],
        "Main Course": [
          "Masala kulcha", "Butter naan", 
          "Basmati steam rice", "Badshahi veg pulao", 
          "Dal makhni", "Paneer bharta", 
          "Vetki begumbahar", "Mughlai mutton curry"
        ],
        Dessert: ["Chatni", "Papad", "Hot gulab jamun", "Sandesh"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Misti paan", "Jarda pan", "Sada pan"]
      }
    },
    {
      name: "Gold Package",
      image:Gold,
      price: "₹949 + 18% GST",
    //   image: "/images/gold-package.jpg",
      items: {
        Beverages: ["Assorted welcome drinks (6-7 variety)", "Black coffee", "Flat white coffee", "Lemon tea"],
        Soup: ["Chicken sweet corn soup", "Sweet corn soup"],
        "Non-veg Starter": ["Chicken tikka", "Fish liver-gin"],
        "Veg Starter": ["Crispy chilly baby corn", "Cajun potato"],
        Salads: ["Fresh green salad", "Russian salad", "Potato salad", "Pasta salad", "Pickle", "Bundi raita"],
        "Main Course": [
          "Masala kulcha", "Butter naan", 
          "Basmati steam rice", "Afgani veg pulao", 
          "Paneer jal fizz", "Aloo 69", 
          "Dal makhni", "Diamond fish fry", 
          "Chicken duck bungalow", "Mutton kasha"
        ],
        Dessert: ["Chatni", "Papad", "Hot gulab jamun", "Sandesh"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Special Banarasi pan", "Misti paan", "Jarda pan", "Sada pan"]
      }
    },
    {
      name: "Diamond Package",
      image:Diamond,
      price: "₹999 + 18% GST",
    //   image: "/images/diamond-package.jpg",
      items: {
        Beverages: ["Mocktail (4-5 variety)", "Black coffee", "Flat white coffee", "Lemon tea"],
        Soup: ["Chicken man chow soup", "Veg man chow soup"],
        "Non-veg Starter": ["Chicken reshmi kabab", "Chicken tikka", "Fish liver-gin"],
        "Veg Starter": ["Crispy chilly baby corn", "Cajun potato"],
        "Indian Chat Section": ["Kolkata Puchka"],
        Salads: ["Fresh green salad", "Russian salad", "Potato salad", "Pasta salad", "Raita", "Pickle"],
        "Main Course": [
          "Masala kulcha", "Tandoori butter naan", "Bhatura", 
          "Steam rice", "Mutton biriyani", 
          "Veg jal fizz", "Aloo achari", 
          "Dal makhni", "Vetki paturi", "Chicken chap"
        ],
        Dessert: ["Chatni", "Papad", "Hot gulab jamun", "Sandesh"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Special Banarasi pan", "Fire pan", "Misti paan", "Jarda pan", "Sada pan"]
      }
    },
    {
      name: "Platinum Package",
      image:Platinum,
      price: "₹1099 + 18% GST",
    //   image: "/images/platinum-package.jpg",
      items: {
        Beverages: ["Mocktail (8-10 variety)", "Coke", "Thumbs-up", "Sprite", "Black coffee", "Kullar chai", "Lemon tea"],
        Soup: ["Chicken man chow soup", "Veg man chow soup"],
        "Non-veg Starter": ["Chicken reshmi kabab", "Chicken tikka", "Chicken hariyali tikka", "Baby Fish fry"],
        "Veg Starter": ["Crispy chilly baby corn", "Potato cheese ball", "Lotus stem fry"],
        "Indian Chat Section": ["Kolkata Puchka", "Doi puchka"],
        "Pan Asian WOK Station": ["Hakka noodles", "Pan fry chicken"],
        Salads: ["Fresh green salad", "Russian salad", "Potato salad", "Pasta salad", "Raita", "Pickle"],
        "Main Course": [
          "Masala kulcha", "Tandoori roti", "Kachuri", 
          "Steam rice", "Afgani mutton polau", 
          "Tawa veg jal fizz", "Aloo achari", 
          "Dal makhni", "Dal fry", "Kurkure bhindi", 
          "Vetki begumbahar", "Chicken bhuna chap"
        ],
        Dessert: ["Chatni", "Papad", "Gulab jamun", "Kheer"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Chocolate pan", "Lollipop pan", "Dancing fire pan", "Misti paan", "Jarda pan", "Sada pan"]
      }
    },
    {
      name: "Exclusive Package",
      image:Exclusive,
      price: "₹1199 + 18% GST",
      items: {
        Beverages: ["Mocktail (6-7 variety)", "Fresh juice (orange, mango, pineapple)", "Black coffee", "Kullar chai", "Lemon tea"],
        Soup: ["Chicken man chow soup", "Veg man chow soup"],
        "Non-veg Starter": ["Chicken reshmi kabab", "Chicken tikka", "Chicken hariyali tikka", "Baby Fish fry"],
        "Veg Starter": ["Crispy chilly baby corn", "Cajun potato", "Paneer tikka"],
        "Indian Chat Section": ["Kolkata Puchka", "Dahi fuchka"],
        "Pan Asian WOK Station": ["Hakka noodles", "Pan fry chicken"],
        Salads: ["Fresh green salad", "Russian salad", "Potato salad", "Pasta salad", "Bundi raita", "Pickle"],
        "Main Course": [
          "Masala kulcha", "Tandoori roti", "Kachori", 
          "Steam rice", "Mutton polau", 
          "Tawa veg jal fizz", "Aloo achari", 
          "Dal makhni", "Cholar dal", 
          "Vetki begumbahar", "Mutton kasa", "Chicken afgani"
        ],
        Dessert: ["Chatni", "Papad", "Gulab jamun", "Baked mehidana"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Special Banarasi pan", "Misti paan", "Jarda pan", "Sada pan"]
      }
    },

    {
      name: "Royal Package",
      image:Royal,
      price: "₹1499 + 18% GST",
    //   image: "/images/royal-package.jpg",
      items: {
        Beverages: ["Mocktail (8-10 variety)", "Fresh juice (orange, mango, pineapple, lichi)", "Black coffee", "Kullar chai", "Lemon tea"],
        Soup: ["Chicken man chow soup", "Veg man chow soup"],
        "Non-veg Starter": ["Chicken reshmi kabab", "Chicken tikka", "Chicken hariyali tikka", "Chicken gondhoraj", "Golden flat prawn"],
        "Veg Starter": ["Crispy chilly baby corn", "Potato cheese ball", "Paneer tikka", "American sweet corn"],
        "Indian Chat Section": ["Kolkata Puchka", "Doi puchka"],
        "Pan Asian WOK Station": ["Hakka noodles", "Pan fry chicken"],
        "Live Dessert Section": ["Jalebi with rabdi"],
        Salads: ["Fresh green salad", "Russian salad", "Potato salad", "Pasta salad", "Dai wada", "Pickle", "Bundi raita"],
        "Main Course": [
          "Masala kulcha", "Tandoori roti", "Kachori", 
          "Steam rice", "Mutton afgani polau", 
          "Tawa veg jal fizz", "Aloo 69", 
          "Dal makhni", "Dal fry", "Potato chips", 
          "Fish tawa fry", "Mutton kasa", "Chicken afgani"
        ],
        Dessert: ["Chatni", "Papad", "Gulab jamun", "Baked mehidana"],
        "Ice Cream Parlor": ["Chocolate", "Vanilla", "Mango"],
        "Banarasi Pan Parlor": ["Special Banarasi pan", "Fire pan", "Chocolate pan", "Lollipop pan", "Dancing fire pan", "Misti paan", "Jarda pan", "Sada pan"]
      }
    }
  ];

 export default menuData;