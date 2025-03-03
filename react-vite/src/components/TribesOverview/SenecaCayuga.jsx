import { useState } from 'react';
import { motion } from 'framer-motion';

function SenecaCayuga() {
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
        <img src="https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188373/pqjrcg6p4lupz2dvqguw.jpg"
          alt="Seneca–Cayuga Nation Logo" className="h-8 w-8 mr-2" />
        Seneca–Cayuga Nation
      </motion.h3>
      {isVisible && (
        <div>
          <p className="text-lg">History and Cultural Overview...</p>
          <p className="text-lg">Services and Programs...</p>
          <a href="https://sctribe.com/heritage/history" className="text-blue-500">Tribe&apos;s History from Official Website</a>
        </div>
      )}
    </section>
  );
}

export default SenecaCayuga;
