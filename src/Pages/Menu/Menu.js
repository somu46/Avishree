import  { useState } from 'react';
import { Typography, Modal, Box } from '@mui/material';
import menuData from './MenuData';
import FloatingWhatsAppButton from '../../Components/FloatWhatsapp/FloatingWhatsAppButton';
import { LuUtensilsCrossed } from 'react-icons/lu';

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
    <div className="mt-[5.1rem] flex flex-col items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:-translate-y-2"
            onClick={() => handleOpen(menu)}
          >
            <div className="h-52 bg-cover bg-center">
              <img src={menu.image} alt={`${menu.name}`} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <Typography variant="h6" className="text-xl font-semibold text-center">
                {menu.name}
              </Typography>
            </div>
            <Typography
              variant="subtitle1"
              className="bg-gray-100 text-center py-3 font-semibold text-gray-800 hover:text-blue-500 transition-colors"
            >
              View Menu
            </Typography>
          </div>
        ))}

        {/* Modal for viewing menu details */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <>
            {/* Cross button outside the Box */}
            <div
  className="absolute top-14 right-5 lg:right-[26rem] z-50 cursor-pointer 
             bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
             p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 
             transition-all duration-200"
  onClick={handleClose}
>
  <LuUtensilsCrossed size={24} />
</div>


            <Box
              className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {selectedMenu && (
                <div className="flex flex-col items-center">
                  <Typography id="modal-title" variant="h5" className="text-2xl font-bold mb-4">
                    {selectedMenu.name}
                  </Typography>
                  <div id="modal-description">
                    {Object.entries(selectedMenu.items).map(([section, items], idx) => (
                      <div key={idx} className="mb-6">
                        <Typography
                          variant="subtitle1"
                          className="text-lg font-bold text-yellow-500 text-center mb-2"
                        >
                          {section}:
                        </Typography>
                        <ul className="list-none p-0 m-0 space-y-2">
                          {items.map((item, itemIdx) => (
                            <li key={`${itemIdx}-${item}`} className="text-gray-700 text-center">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Close
                  </button>
                </div>
              )}
            </Box>
          </>
        </Modal>
      </div>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Menu;
