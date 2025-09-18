import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Photography",
      price: "₦150 /SESSION",
      description: "Professional photography services for personal branding and business needs.",
      icon: "📸"
    },
    {
      id: 2,
      title: "Brand Strategy",
      price: "₦400 /PROJECT",
      description: "Comprehensive brand development and strategic planning for entrepreneurs.",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      price: "₦250 /MONTH",
      description: "Expert social media management and content strategy for maximum engagement.",
      icon: "📱"
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
                <div className="mb-2 text-2xl font-bold text-primary">
                  {service.price}
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="mb-6 text-center text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block text-red-600 font-semibold hover:text-red-700 transition-colors duration-300"
                >
                  Learn More &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
