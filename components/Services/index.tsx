import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Personal Styling",
      description: "Get personalized fashion advice from our expert stylists to create the perfect look for any occasion.",
      icon: "👗"
    },
    {
      id: 2,
      title: "Custom Tailoring",
      description: "Bespoke tailoring services to ensure every piece fits you perfectly and reflects your personal style.",
      icon: "✂️"
    },
    {
      id: 3,
      title: "VIP Shopping Experience",
      description: "Exclusive shopping appointments with private consultations and early access to new collections.",
      icon: "💎"
    },
    {
      id: 4,
      title: "Wardrobe Consultation",
      description: "Professional wardrobe analysis to help you build a cohesive and versatile clothing collection.",
      icon: "🪞"
    },
    {
      id: 5,
      title: "Event Styling",
      description: "Complete styling services for special events, from red carpet to corporate functions.",
      icon: "🌟"
    },
    {
      id: 6,
      title: "Fashion Education",
      description: "Learn about fashion trends, styling techniques, and how to build a timeless wardrobe.",
      icon: "📚"
    }
  ];

  return (
    <section id="services" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Services We Offer"
          paragraph="Discover our comprehensive range of luxury fashion services designed to elevate your style and confidence."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark"
            >
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-center text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
