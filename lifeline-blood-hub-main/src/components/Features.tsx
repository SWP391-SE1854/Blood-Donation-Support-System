
import { Shield, Clock, Users, Award, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All donations are screened and tested following the highest safety standards and protocols.",
      color: "blood-blue"
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Streamlined donation process that takes only 10-15 minutes of your time to save lives.",
      color: "blood-green"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Join thousands of donors in your community working together to save lives every day.",
      color: "blood-red"
    },
    {
      icon: Award,
      title: "Recognition Program",
      description: "Earn badges and recognition for your life-saving contributions to the community.",
      color: "blood-blue"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Regular blood donation provides health benefits and free health screening for donors.",
      color: "blood-green"
    },
    {
      icon: MapPin,
      title: "Convenient Locations",
      description: "Find donation centers near you with our easy-to-use location finder and booking system.",
      color: "blood-red"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose LifeLine Blood Hub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make blood donation safe, convenient, and rewarding. Join our mission to save lives and strengthen our community through the gift of blood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}-light rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
