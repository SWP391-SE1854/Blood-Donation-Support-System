
import { Heart, Stethoscope, Users } from "lucide-react";

const WhyDonate = () => {
  const reasons = [
    {
      icon: Heart,
      title: "With a single donation, you can help up to 3 people",
      description: "Your single blood donation can be separated into different components to help multiple patients in need."
    },
    {
      icon: Stethoscope,
      title: "You can get a free medical check up",
      description: "Every donation includes a complimentary health screening to check your vitals and overall health."
    },
    {
      icon: Users,
      title: "You can make a difference in your community",
      description: "Your donation directly helps patients in local hospitals and emergency situations in your area."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why You Should Donate</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blood-red-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-blood-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;
