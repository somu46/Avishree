import './Menu.css'
import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, Modal, Box } from '@mui/material';
import menuData from './MenuData';



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
    <div className='Menu-grid-wrapper'>
    <div className='Menu-grid z-1'>
      {menuData.map((menu, index) => (
        <div className="Menu-card" key={index}>
          <div className="menu-image cover">
            <img src={menu.image} alt={`${menu.name} `} />
          </div>
          <div className="menu-details">
            <Typography variant="h6" className="menu-name">
              {menu.name}
            </Typography>
            <Typography variant="body1" className="menu-price">
              {menu.price}
            </Typography>
          </div>
          <Accordion className='flex flex-wrap justify-center'>
            <AccordionSummary  >
              <Typography
                variant="subtitle1"
                style={{ fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => handleOpen(menu)}
              >
              <p > View Menu</p> 
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
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '800px',
      bgcolor: 'background.paper',
      borderRadius: 3,
      boxShadow: 24,
      p: 4,
      maxHeight: '90vh',
      overflowY: 'auto',
    }}
  >
    {selectedMenu && (
      <>
        <Typography id="modal-title" variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          {selectedMenu.name} - {selectedMenu.price}
        </Typography>
        <div id="modal-description">
          {Object.entries(selectedMenu.items).map(([section, items], idx) => (
            <Box key={idx} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                {section}:
              </Typography>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#555', lineHeight: '1.6' }}>
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ listStyleType: 'disc' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <button
            onClick={handleClose}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Close
          </button>
        </Box>
      </>
    )}
  </Box>
</Modal>

    </div>
    </div>
  );
};


export default Menu;
