import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../Assets/logo.png'
import './Menu.css'
import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Modal, Box } from '@mui/material';







// Complete menu data including images, prices, and items for each package
const menuData = [
  {
    name: "Bronze Package",
    price: "₹699 + 18% GST",
    image: logo,
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
    price: "₹849 + 18% GST",
    image: "/images/silver-package.jpg",
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
    price: "₹949 + 18% GST",
    image: "/images/gold-package.jpg",
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
    price: "₹999 + 18% GST",
    image: "/images/diamond-package.jpg",
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
    price: "₹1099 + 18% GST",
    image: "/images/platinum-package.jpg",
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
    price: "₹1199 + 18% GST",
    image: "/images/exclusive-package.jpg",
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
    price: "₹1499 + 18% GST",
    image: "/images/royal-package.jpg",
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


const Menu = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleOpen = (menu) => {
    setSelectedMenu(menu);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMenu(null);
  };

  return (
    <div className='Menu-grid z-1'>
      {menuData.map((menu, index) => (
        <div className="Menu-card" key={index}>
          <div className="menu-image over">
            <img src={menu.image} alt={`${menu.name} photo`} />
          </div>
          <div className="menu-details">
            <Typography variant="h6" className="menu-name">
              {menu.name}
            </Typography>
            <Typography variant="body1" className="menu-price">
              {menu.price}
            </Typography>
          </div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => handleOpen(menu)}
              >
                View Details
              </Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      ))}

      {/* Modal for viewing details */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          height:100,
          width: 1000, 
          bgcolor: 'background.paper', 
          borderRadius: 2,
          boxShadow: 24, 
          p: 4 
        }}>
          {selectedMenu && (
            <>
              <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                {selectedMenu.name} - {selectedMenu.price}
              </Typography>
              <div id="modal-description">
                {Object.entries(selectedMenu.items).map(([section, items], idx) => (
                  <div key={idx}>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                      {section}:
                    </Typography>
                    <ul>
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button onClick={handleClose} style={{ marginTop: '20px', padding: '8px 16px', cursor: 'pointer' }}>
                Close
              </button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};


export default Menu;
