
import { Edit, Heart } from "lucide-react";

const DonationSteps = () => {
  const steps = [
    {
      number: "1",
      icon: Edit,
      title: "Registration",
      description: "Fill out the registration form with your basic information and health details."
    },
    {
      number: "2", 
      icon: Edit,
      title: "Health Screening",
      description: "Complete a brief health questionnaire and mini-physical examination."
    },
    {
      number: "3",
      icon: Heart,
      title: "Donation",
      description: "The actual blood donation process takes about 8-12 minutes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How to donate blood ?</h2>
        
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-blood-red"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white border-4 border-blood-red rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-blood-red">{step.number}</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-blood-red-light rounded-full flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-blood-red" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSteps;
