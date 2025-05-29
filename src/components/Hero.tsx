
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-gray-800">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Background image placeholder - in a real implementation, you'd use the actual image */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            EVERY<br />
            <span className="text-blood-red">DROP</span><br />
            COUNTS
          </h1>
          
          <Button 
            size="lg" 
            className="bg-blood-red hover:bg-blood-red-dark text-white px-8 py-4 text-lg font-semibold"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
