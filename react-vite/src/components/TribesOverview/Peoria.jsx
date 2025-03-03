import { useState } from 'react';
import { motion } from 'framer-motion';

function Peoria() {
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
        <img src="https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188372/xi4llxtevvzotci4ds3t.png"
          alt="Peoria Tribe Logo" className="h-8 w-8 mr-2" />
        Peoria Tribe of Indians of Oklahoma
      </motion.h3>
      {isVisible && (
        <div>
          <p className="text-lg">History and Cultural Overview...</p>
          <p className="text-lg">Services and Programs...</p>
          <a href="https://www.peoriatribe.com/" className="text-blue-500">Link to Tribe&apos;s Official Website</a>
        </div>
      )}
    </section>
  );
}

export default Peoria;
