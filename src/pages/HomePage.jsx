// Import gambar hero dari folder assets
import heroImage from "../assets/image/hero2.jpg";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="hero py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="hero-image w-full md:w-1/2">
          <img
            src={heroImage} // Menggunakan gambar lokal
            alt="Hero"
            className="rounded-2xl"
          />
        </div>
        <div className="hero-text w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita velit officiis esse assumenda dolorem sapiente corporis hic perspiciatis, quae saepe aspernatur rerum molestiae vero autem distinctio labore laudantium a laboriosam.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We are a team of professionals dedicated to providing high-quality solutions for your business needs. Our goal is to empower your brand with innovative technology and exceptional service.
        </p>
      </section>

      {/* Service Section */}
      <section className="service py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="service-card bg-white p-6 rounded-2xl shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              We build high-quality and responsive websites to grow your business online.
            </p>
          </div>
          <div className="service-card bg-white p-6 rounded-2xl shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-gray-600">
              Custom mobile applications that bring your ideas to life.
            </p>
          </div>
          <div className="service-card bg-white p-6 rounded-2xl shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
            <p className="text-gray-600">
              Reach your target audience with our effective digital marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="project py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="project-card w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">Description of project 1.</p>
            </div>
          </div>
          <div className="project-card w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">Description of project 2.</p>
            </div>
          </div>
          <div className="project-card w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600">Description of project 3.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
