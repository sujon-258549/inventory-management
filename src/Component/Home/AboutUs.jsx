// src/components/AboutUs.js

import { Helmet } from "react-helmet-async";


const AboutUs = () => {
    return (
        <div className="max-w-6xl py-32 mx-auto px-4 ">
            <Helmet>
                <title>Home || About</title>
            </Helmet>
            <h1 className=" text-4xl md:text-6xl lg:text-[80px] font-playfair font-bold text-center mb-6">About Us</h1>
            <div>
                <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
            </div>
            <section className="mb-10">
                <h2 className="text-2xl font-playfair font-semibold mb-2">Who We Are</h2>
                <p className="text-gray-700 text-lg">
                    We are a leading garment manufacturing company dedicated to creating high-quality, sustainable, and stylish apparel for a global market. From concept to completion, our focus is on delivering exceptional clothing that meets both aesthetic and ethical standards.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-playfair font-semibold mb-2">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                    To design and produce garments that inspire confidence, promote sustainable practices, and build lasting partnerships with clients worldwide.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-playfair font-semibold mb-2">Why Choose Us?</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Quality Craftsmanship</h3>
                        <p className="text-gray-700">
                            Our skilled artisans and designers work together to bring the latest trends to life. We prioritize quality and precision in every garment, ensuring a durable and stylish final product.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Sustainable Practices</h3>
                        <p className="text-gray-700">
                            We are committed to eco-friendly practices, using sustainable materials and reducing waste throughout the production process. Our mission is to minimize our environmental impact without compromising on quality.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Comprehensive Services</h3>
                        <p className="text-gray-700">
                            From initial design to final delivery, our end-to-end solutions cover every aspect of garment manufacturing. We provide support at every stage, including pattern-making, sample production, quality control, and logistics.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-playfair font-semibold mb-2">Detailed Overview</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Design & Development</h3>
                        <p className="text-gray-700">
                            Our creative team keeps a pulse on global fashion trends, bringing fresh and innovative designs to the table. We collaborate closely with clients to align designs with their vision, ensuring each piece is a perfect reflection of brand identity.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Manufacturing Excellence</h3>
                        <p className="text-gray-700">
                            Our manufacturing facilities are equipped with state-of-the-art technology and machinery, enabling us to produce high volumes without sacrificing quality. Each garment undergoes rigorous quality checks at every stage, from stitching to finishing.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Sourcing & Sustainability</h3>
                        <p className="text-gray-700">
                            We are deeply committed to sustainable sourcing, selecting materials that are both eco-friendly and ethically produced. By working with trusted suppliers, we ensure that our materials are safe, long-lasting, and sourced responsibly.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Quality Control</h3>
                        <p className="text-gray-700">
                            Quality is at the core of our manufacturing process. Our quality control team performs multiple inspections throughout production, focusing on fabric quality, stitching accuracy, and overall garment durability to meet global standards.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-playfair font-medium">Global Shipping & Logistics</h3>
                        <p className="text-gray-700">
                            Our logistics team ensures smooth, efficient delivery, whether local or international. With established relationships with shipping partners, we guarantee timely and cost-effective delivery for all our clients.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
