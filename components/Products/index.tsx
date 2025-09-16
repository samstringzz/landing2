import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: "$299",
      image: "/images/blog/blog-01.jpg",
      category: "Evening Wear"
    },
    {
      id: 2,
      name: "Classic Business Suit",
      price: "$399",
      image: "/images/blog/blog-02.jpg",
      category: "Business Attire"
    },
    {
      id: 3,
      name: "Casual Chic Blouse",
      price: "$149",
      image: "/images/blog/blog-03.jpg",
      category: "Casual Wear"
    },
    {
      id: 4,
      name: "Designer Handbag",
      price: "$199",
      image: "/images/video/video.jpg",
      category: "Accessories"
    },
    {
      id: 5,
      name: "Luxury Watch",
      price: "$599",
      image: "/images/blog/blog-01.jpg",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Premium Shoes",
      price: "$249",
      image: "/images/blog/blog-02.jpg",
      category: "Footwear"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Products"
          paragraph="Discover our curated collection of luxury fashion items, carefully selected to meet the highest standards of quality and style."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20" />
                <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-dark dark:text-white">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
