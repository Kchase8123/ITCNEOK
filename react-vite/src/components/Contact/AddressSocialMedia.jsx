import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function AddressSocialMedia() {
  return (
    <section className="mb-8 pt-24">
      <h2 className="text-3xl font-bold mb-4">Address and Social Media Links</h2>
      <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDChcMYPG8lTfAI7xei7g-MqWeIFfQJK3Y&q=21+N+Eight+Tribes+Trail+Suite+C,Miami,OK,United+States,74354`}
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <p className="text-lg">21 N Eight Tribes Trail Suite C, Miami, OK, United States, 74354</p>
      <p className="text-lg">Phone Number: (918) 542-4486</p>
      <div className="mt-4 flex space-x-4">
        <motion.a
          href="https://www.facebook.com/ITCMiamiOK/about"
          className="text-blue-500"
          aria-label="Facebook"
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook size={32} />
        </motion.a>
        <motion.a
          href="https://www.twitter.com"
          className="text-blue-500"
          aria-label="Twitter"
          whileHover={{ scale: 1.2 }}
        >
          <FaTwitter size={32} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com"
          className="text-blue-500"
          aria-label="Instagram"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram size={32} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com"
          className="text-blue-500"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a
          href="mailto:jdixon@intertribalcouncil.org"
          className="text-blue-500"
          aria-label="Email"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope size={32} />
        </motion.a>
      </div>
    </section>
  );
}

export default AddressSocialMedia;
