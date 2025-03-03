import { useState } from 'react';
import { motion } from 'framer-motion';

function Shawnee() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="mb-8">
      <motion.h3
        className="text-2xl font-bold mb-2 flex items-center cursor-pointer p-4 bg-[#f69b28] text-black rounded-lg shadow-md"
        onClick={toggleVisibility}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188373/bs7qwv4wgl8o6avryli3.png"
          alt="Shawnee Tribe Logo" className="h-8 w-8 mr-2" />
        Shawnee Tribe
      </motion.h3>
      {isVisible && (
        <div>
          <p className="text-lg">History and Cultural Overview...</p>
          <p className="text-lg">Services and Programs...</p>
          <a href="https://www.shawnee-tribe.org/" className="text-blue-500">Link to Tribe&apos;s Official Website</a>
        </div>
      )}
    </section>
  );
}

export default Shawnee;
