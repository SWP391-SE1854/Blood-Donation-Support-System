
import { Heart, Users, MapPin, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Donors",
      description: "Registered blood donors"
    },
    {
      icon: Heart,
      number: "150,000+",
      label: "Lives Saved",
      description: "Through blood donations"
    },
    {
      icon: MapPin,
      number: "200+",
      label: "Locations",
      description: "Donation centers nationwide"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Support",
      description: "Critical blood supply"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blood-red to-blood-red-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Together, we've built a network that saves lives every day. See how your contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-white/80">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
