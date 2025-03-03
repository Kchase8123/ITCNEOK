import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const photos = [
  { id: 1, src: 'https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188284/samples/coffee.jpg', alt: 'Photo 1' },
  { id: 2, src: 'https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188284/samples/coffee.jpg', alt: 'Photo 2' },
  { id: 3, src: 'https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188284/samples/coffee.jpg', alt: 'Photo 3' },
  { id: 4, src: 'https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188284/samples/coffee.jpg', alt: 'Photo 4' },
  { id: 5, src: 'https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188284/samples/coffee.jpg', alt: 'Photo 5' },
  { id: 6, src: 'https://res.cloudinary.com/dbbngrzjg/image/upload/v1740188284/samples/coffee.jpg', alt: 'Photo 6' },
];

function MediaGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const nextPhotos = photos.slice(selectedPhotoIndex + 1, selectedPhotoIndex + 4);

  return (
    <section className="mb-8 pt-24">
      <h2 className="text-3xl font-bold mb-4">Media Gallery</h2>
      <div className="flex flex-col items-center">
        <div className="relative bg-gray-200 p-4 mb-4">
          <img src={photos[selectedPhotoIndex].src} alt={photos[selectedPhotoIndex].alt} className="w-full h-auto" />
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#f69b28] p-2 rounded-full"
            onClick={handlePrevClick}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#f69b28] p-2 rounded-full"
            onClick={handleNextClick}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex space-x-4">
          {nextPhotos.map((photo, index) => (
            <div key={photo.id} className="bg-gray-200 p-2 cursor-pointer" onClick={() => handlePhotoClick(selectedPhotoIndex + index + 1)}>
              <img src={photo.src} alt={photo.alt} className="w-24 h-16 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaGallery;
