import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/images/blog/blog-01.jpg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/images/blog/blog-02.jpg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/images/blog/blog-03.jpg",
      alt: "Gallery Image 3",
    },
    {
      id: 4,
      src: "/images/video/video.jpg",
      alt: "Gallery Image 4",
    },
    {
      id: 5,
      src: "/images/blog/blog-01.jpg",
      alt: "Gallery Image 5",
    },
    {
      id: 6,
      src: "/images/blog/blog-02.jpg",
      alt: "Gallery Image 6",
    },
  ];

  return (
    <section id="gallery" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Gallery"
          paragraph="Take a look at our work and see what we can do for you."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
