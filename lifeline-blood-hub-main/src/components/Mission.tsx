
const Mission = () => {
  const missionPoints = [
    "Promote the importance of donating blood",
    "To save the lives of people who are in dangers",
    "Share general information about blood type, eligibility, donation process and agenda",
    "Develop and saves the donors information for admin and staff"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <ul className="space-y-4">
            {missionPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blood-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
