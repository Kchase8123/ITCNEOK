function Hero() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center text-white" >
      <div className="text-center max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Inter-Tribal Council of Northeast Oklahoma</h1>
        <p className="text-lg md:text-xl mb-8">Supporting Tribal Sovereignty, Cultural Preservation, and Economic Development</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;



// style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
