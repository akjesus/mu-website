import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Swal from "sweetalert2";

export default function BlogPost() {
  const { id } = useParams();
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

  // Sample blog data - to be replaced with API fetch
  const blogPosts = [
    {
      id: "893345-afb-4c9e-8b1a-2d3f5e6a7b8c",
      title: "Maduka University Welcomes New Students for 2026/2027",
      excerpt:
        "A warm welcome to our newest cohort of students. Discover the exciting opportunities awaiting you at Maduka University.",
      content: `
        <p>Maduka University is thrilled to welcome our newest students for the 2026/2027 academic year! This year's cohort brings together bright minds from across Nigeria and beyond, ready to embark on their educational journey.</p>

        <p>Our orientation program will introduce students to campus life, academic resources, and the vibrant community that makes Maduka University special. From state-of-the-art facilities to expert faculty, we're committed to providing an exceptional learning experience.</p>

        <p>As you begin this exciting chapter, remember that success comes from dedication, curiosity, and the support of our community. We're here to help you achieve your goals and make the most of your time at Maduka University.</p>

        <h3>What to Expect</h3>
        <ul>
          <li>Comprehensive orientation program</li>
          <li>Access to modern learning facilities</li>
          <li>Opportunities for extracurricular activities</li>
          <li>Support from academic advisors and mentors</li>
        </ul>

        <p>Welcome aboard, and let's create success stories together!</p>
      `,
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
      content: `
        <p>Technology is rapidly transforming every aspect of our lives, and education is no exception. At Maduka University, we're committed to staying at the forefront of technological innovation in education.</p>

        <p>Our Computer Science and Engineering programs now include courses in artificial intelligence, blockchain technology, and cybersecurity. Students have access to cutting-edge labs equipped with the latest hardware and software.</p>

        <p>We're also implementing virtual reality classrooms and AI-powered learning assistants to enhance the educational experience. These tools help students grasp complex concepts more effectively and prepare them for careers in the tech-driven economy.</p>

        <h3>Key Initiatives</h3>
        <ul>
          <li>AI and Machine Learning curriculum expansion</li>
          <li>VR/AR integration in engineering courses</li>
          <li>Industry partnerships for real-world projects</li>
          <li>Continuous professional development for faculty</li>
        </ul>

        <p>By embracing technology in education, we're ensuring our graduates are ready to lead in the digital age.</p>
      `,
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
      content: `
        <p>Environmental sustainability is a core value at Maduka University. We're committed to reducing our carbon footprint and educating our community about sustainable practices.</p>

        <p>Our campus now features solar panels that provide 40% of our energy needs, rainwater harvesting systems, and extensive green spaces. We've also implemented a comprehensive recycling program and reduced single-use plastics across campus.</p>

        <p>Students can participate in our sustainability clubs, attend workshops on environmental topics, and even conduct research on sustainable technologies. These initiatives not only benefit the environment but also prepare our students to address global sustainability challenges.</p>

        <h3>Sustainability Achievements</h3>
        <ul>
          <li>40% renewable energy usage</li>
          <li>Zero-waste cafeteria initiative</li>
          <li>Campus tree planting program (500+ trees)</li>
          <li>Green building certifications for new constructions</li>
        </ul>

        <p>Together, we're building a more sustainable future for our campus and our world.</p>
      `,
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
      content: `
        <p>At Maduka University, we're proud of our graduates who are making a difference in their communities and industries. Their success stories inspire current students and demonstrate the impact of a Maduka education.</p>

        <p>Meet Sarah Johnson, a Computer Science graduate who founded a successful tech startup that provides educational software to rural schools. Or Michael Chen, our Business Administration alumnus who now leads a multinational corporation's sustainability initiatives.</p>

        <p>These stories highlight the diverse paths our graduates take and the skills they gain at Maduka. From entrepreneurship to corporate leadership, our alumni are leaders in their fields.</p>

        <h3>Notable Alumni Achievements</h3>
        <ul>
          <li>Sarah Johnson - Founder of EduTech Solutions</li>
          <li>Michael Chen - VP of Sustainability at Global Corp</li>
          <li>Dr. Amara Okafor - Published researcher in medical sciences</li>
          <li>David Nwosu - Award-winning journalist</li>
        </ul>

        <p>These are just a few examples of the incredible impact our graduates are making. We can't wait to see what our current students will achieve!</p>
      `,
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
      content: `
        <p>Our College of Medical Sciences continues to push the boundaries of medical research, with recent breakthroughs that could revolutionize healthcare in Nigeria and beyond.</p>

        <p>Dr. Adebayo and his team have developed a cost-effective diagnostic tool for tropical diseases, while Professor Okon's research on herbal medicine has led to new treatments for common ailments. Our students are actively involved in these research projects, gaining hands-on experience in cutting-edge medical science.</p>

        <p>These achievements not only advance medical knowledge but also address local health challenges with innovative solutions.</p>

        <h3>Recent Breakthroughs</h3>
        <ul>
          <li>Low-cost diagnostic tool for malaria and typhoid</li>
          <li>Herbal-based treatments for hypertension</li>
          <li>AI-assisted medical imaging analysis</li>
          <li>Community health intervention programs</li>
        </ul>

        <p>Our research is making a real difference in healthcare accessibility and quality.</p>
      `,
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
      content: `
        <p>Maduka University's annual Cultural Festival was a spectacular celebration of diversity, creativity, and unity. Students from all backgrounds came together to showcase their cultural heritage through music, dance, food, and art.</p>

        <p>The festival featured performances from traditional Nigerian dance troupes, international student groups, and our talented music ensembles. Food stalls offered cuisines from around the world, while art exhibitions displayed student-created works inspired by various cultures.</p>

        <p>This year's theme, "Unity in Diversity," perfectly captured the spirit of our multicultural community. Events like this strengthen our bonds and foster understanding among different cultures.</p>

        <h3>Festival Highlights</h3>
        <ul>
          <li>Traditional dance performances from all regions</li>
          <li>International food festival with 20+ cuisines</li>
          <li>Student art and photography exhibitions</li>
          <li>Cultural fashion show</li>
          <li>Music concerts featuring various genres</li>
        </ul>

        <p>The Cultural Festival reminds us that despite our differences, we share so much in common. It was a truly memorable event that brought our community closer together.</p>
      `,
      author: "Events Team",
      date: "March 15, 2026",
      image:
        "/images/blog/blog_6.jpg",
      category: "Events",
    },
  ];

  const post = blogPosts.find((p) => p.id === id);

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
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#00356B] text-white rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
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
          to="/blog"
          className="inline-flex items-center text-[#00356B] hover:text-blue-700 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
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
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div
          className="prose prose-lg max-w-none text-gray-800"
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
