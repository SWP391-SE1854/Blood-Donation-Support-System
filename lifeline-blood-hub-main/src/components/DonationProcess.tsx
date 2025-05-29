
import { UserCheck, Calendar, Heart, Award } from "lucide-react";

const DonationProcess = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Registration",
      description: "Sign up and complete your donor profile with basic health information.",
      step: "01"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Book an appointment at your nearest donation center or mobile drive.",
      step: "02"
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Complete the quick and safe donation process with our trained staff.",
      step: "03"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Receive confirmation and track your life-saving impact in our system.",
      step: "04"
    }
  ];

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Blood Donation Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Donating blood is simple, safe, and takes less than an hour. Follow these easy steps to become a life-saver in your community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blood-red text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                  {step.step}
                </div>

                {/* Card */}
                <div className="bg-gray-50 rounded-xl p-8 pt-12 h-full group-hover:bg-blood-red-light transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-blood-red" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blood-red to-blood-red-dark rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Save Lives?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of heroes who donate blood regularly and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blood-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Donation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blood-red transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;
