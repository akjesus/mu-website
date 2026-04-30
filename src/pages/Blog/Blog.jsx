import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";

export default function Blog() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Success!", "You have subscribed to our newsletter!", "success");
    setFormData({ email: "" });
  };

  const blogPosts = [
    {
      id: "893345-afb-4c9e-8b1a-2d3f5e6a7b8c",
      title: "Maduka University Welcomes New Students for 2026/2027",
      excerpt:
        "A warm welcome to our newest cohort of students. Discover the exciting opportunities awaiting you at Maduka University.",
      author: "Admin",
      date: "April 15, 2026",
      image:
        "/images/blog/blog_1.jpg",
      category: "News",
    },
    {
      id: "b7c8d9-e0f1-2345-6789-0123456789ab",
      title: "Advancements in Technology Education",
      excerpt:
        "Explore how Maduka University is integrating cutting-edge technology into our curriculum to prepare students for the future.",
      author: "Dr. Tech Innovations",
      date: "April 10, 2026",
      image:
        "/images/blog/blog_2.jpg",
      category: "Education",
    },
    {
      id: "c8d9e0-f123-4567-8901-23456789abCD",
      title: "Campus Sustainability Initiatives",
      excerpt:
        "Learn about our commitment to environmental sustainability and the green initiatives implemented across campus.",
      author: "Eco Team",
      date: "April 5, 2026",
      image:
        "/images/blog/blog_3.jpg",
      category: "Sustainability",
    },
    {
      id: "d9e0f1-2345-6789-0123-456789abcdEF",
      title: "Student Success Stories",
      excerpt:
        "Inspiring tales of our graduates who have made significant impacts in their fields and communities.",
      author: "Alumni Office",
      date: "March 28, 2026",
      image:
        "/images/blog/blog_4.jpg",
      category: "Alumni",
    },
    {
      id: "e0f123-4567-8901-2345-6789abcdef01",
      title: "Research Breakthroughs in Medical Sciences",
      excerpt:
        "Highlighting recent research achievements in our College of Medical Sciences and their potential impact on healthcare.",
      author: "Research Department",
      date: "March 20, 2026",
      image:
        "/images/blog/blog_5.jpg",
      category: "Research",
    },
    {
      id: "f12345-6789-0123-4567-89abcdef0123",
      title: "Cultural Festival Highlights",
      excerpt:
        "A recap of this year's cultural festival, celebrating diversity and creativity among our student community.",
      author: "Events Team",
      date: "March 15, 2026",
      image:
        "/images/blog/blog_6.jpg",
      category: "Events",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#00356B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Maduka University Blog
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest news, research, and stories from our
            vibrant university community.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00356B] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#00356B] transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-[#00356B] font-medium hover:text-blue-700 transition"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#00356B] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-200 mb-8">
            Subscribe to our newsletter for the latest news and updates from
            Maduka University.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#00356B] rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
