import { Users, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32">
      {/* Intro Section */}
      <section className="relative bg-[#00356B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            About Maduka University
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Maduka University is committed to providing high-quality education
            with a global perspective. Our mission is to empower students with
            knowledge, skills, and values to thrive in a competitive world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#00356B]">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            To provide excellent educational opportunities in the frontiers of
            knowledge and application of innovative and creative technologies to
            industry, business and entrepreneurship that are transformative and
            responsive to the needs and challenges of the local and global
            society
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#00356B]">Our Vision</h2>
          <p className="mt-4 text-gray-600">
            To be a world-class citadel of learning that embodies academic
            excellence through research, innovation, and entrepreneurship for
            development.
          </p>
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="bg-[#00356B] text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <Users className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">2,000+</h3>
            <p className="mt-2">Students Enrolled</p>
          </div>
          <div>
            <Award className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">50+</h3>
            <p className="mt-2">Awards & Recognitions</p>
          </div>
          <div>
            <BookOpen className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">19+</h3>
            <p className="mt-2">Programs Offered</p>
          </div>
        </div>
      </section>

      {/* Faculty Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#00356B] mb-12">
          Meet Our Faculty
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            {
              name: "Prof. Charles Ogbulogo",
              role: "Vice Chancellor",
              img: "/images/veecee.jpg",
            },
            {
              name: "Dr. Samuel Maduka Onyishi",
              role: "Pro Chancellor",
              img: "/images/sam.webp",
            },
            {
              name: "Mr. John M.U. Omeje",
              role: "Registrar",
              img: "https://media.licdn.com/dms/image/v2/D5603AQFaIZKVhnof1Q/profile-displayphoto-shrink_200_200/B56ZXc8IjcGQAc-/0/1743168506928?e=2147483647&v=beta&t=R_Omd_4gRJdmIOyn2dpn2HVK6aD-NDPYOhb6WTXAnic",
            },
          ].map((faculty, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#00356B]">
                {faculty.name}
              </h3>
              <p className="text-black-600">{faculty.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* University Anthem */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#00356B] mb-8">
            Maduka University Anthem
          </h2>
          <div className="text-center mb-8">
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-gray-800 leading-relaxed whitespace-pre-line text-center">
              <p>• WE HOLD THE KEY</p>
              <p>• FOR KNOWLEDGE AND SKILLS</p>
              <p>• WE HOLD THE KEY</p>
              <p>• FOR TOTAL INDEPENDENCE</p>
              <p>• WE HOLD THE KEY</p>
              <p>• FOR KNOWLEDGE AND SKILLS</p>
              <p>• WE HOLD THE KEY</p>
              <p>• FOR SERVICE TO OUR WORLD</p>

              <p className="uppercase font-bold text-primary-100">
                Our Name Tells Our Story
              </p>
              <p>• WE’RE MADUKA VARSITY</p>
              <p>• A PLACE FOR A GREAT VISION</p>
              <p>• FOR PEOPLE ARE THE CROWNS</p>
              <div>
                <p>• OUR MISSION IS TO RAISE</p>
                <p>• THE NEXT GENERATION</p>
                <p>• TO BIRTH INNOVATION</p>
                <p>• THROUGH QUALITY EDUCATION</p>
                <p>• WE BUILD THE YOUTHS</p>
                <p>• FOR A LIFE OF MEANING</p>
                <p>• IN REAL CONTRIBUTIONS</p>
                <p>• THAT ALL MUST SEE</p>
              </div>
              <div className="flex justify-center mb-10">
                <div className="bg-secondary-50 border border-gray-200 rounded-2xl p-6 shadow-lg w-full md:w-2/3 lg:w-1/2">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-200 mb-3 text-center">
                    Listen to the Anthem 🎵
                  </h3>
                  <audio
                    controls
                    className="w-full mt-2 rounded-lg bg-gray-100"
                  >
                    <source src="/maduka-anthem.mpeg" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
          </div>
        </div>
      </section>
    </div>
  );
}
