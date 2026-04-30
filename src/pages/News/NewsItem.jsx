import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Swal from "sweetalert2";
import moment from "moment";
import parse from "html-react-parser";
import { getPost } from "../../API/blog";

export default function BlogPost() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(id);
        const res = response.data.data || [];
        console.log(res);
        setPost(res);
      } catch (error) {
        console.error("Failed to load news posts:", error);
      }
    };

    fetchPost();
  }, []);

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

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 bg-[#00356B] text-white rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-4">
        <Link
          to="/news"
          className="inline-flex items-center text-[#00356B] hover:text-blue-700 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to News
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <span className="bg-[#00356B] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-200 text-sm">
              <User className="w-4 h-4 mr-1" />
              <span className="mr-4">{post.author}</span>
              <Calendar className="w-4 h-4 mr-1" />
              <span>{moment(post.createdAt).format("MMMM Do YYYY")}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-12 overflow-x-hidden"
      >
        <div
          className="prose prose-lg max-w-3xl text-gray-800 break-words overflow-x-hidden"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>

      {/* Related Posts or Newsletter could go here */}
      <section className="bg-[#00356B] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-200 mb-8">
            Subscribe to our newsletter for more stories like this.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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
