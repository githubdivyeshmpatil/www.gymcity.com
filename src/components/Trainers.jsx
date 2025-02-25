export default function Trainers() {
  const trainers = [
    {
      name: "Prabhash Malik Owner",
      achievement: "Certified Fitness Coach",
      experience: "20+ Years Experience",
      image: "img/sir1.jpg",
    },
    {
      name: "Sagar Dhivare",
      achievement: "Gym City Fitness Coach",
      experience: "8+ Years Experience",
      image: "img/sir3.jpg",
    },
    {
      name: "Deepak Patil",
      achievement: "Gym City Fitness Coach",
      experience: "5+ Years Experience",
      image: "img/sir2.jpg",
    },
    {
      name: "Srikant bhuyan",
      achievement: "Gym City Fitness Coach",
      experience: "4+ Years Experience",
      image: "img/sri.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl text-center">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-48 h-48 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl rajdhani-font font-semibold">{trainer.name}</h3>
            <p className="text-gray-600 text-lg font-roboto">{trainer.achievement}</p>
            <p className="text-gray-500">{trainer.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
