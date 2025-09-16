import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Event = () => {
  const events = [
    {
      id: 1,
      title: "Exclusive Fashion Show",
      date: "March 15, 2024",
      location: "Grand Ballroom, NYC",
      image: "/images/blog/blog-01.jpg",
      description: "Join us for an exclusive fashion showcase featuring the latest trends and designs."
    },
    {
      id: 2,
      title: "VIP Launch Event",
      date: "April 20, 2024",
      location: "Rooftop Lounge, LA",
      image: "/images/blog/blog-02.jpg",
      description: "Be the first to experience our new collection in an intimate VIP setting."
    },
    {
      id: 3,
      title: "Summer Collection Preview",
      date: "May 10, 2024",
      location: "Beach Resort, Miami",
      image: "/images/blog/blog-03.jpg",
      description: "Preview our stunning summer collection in a tropical paradise setting."
    }
  ];

  return (
    <section id="events" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Upcoming Events"
          paragraph="Join us for exclusive events and experiences that showcase our latest collections and innovations."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-dark"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                  {event.title}
                </h3>
                <p className="mb-2 text-sm text-primary font-semibold">
                  {event.date}
                </p>
                <p className="mb-3 text-sm text-body-color dark:text-body-color-dark">
                  {event.location}
                </p>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
