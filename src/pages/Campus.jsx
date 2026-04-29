import { motion } from "framer-motion";
import { Home, Utensils, Trophy, Users, Camera, Heart } from "lucide-react";

export default function Campus() {
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
            Campus Life at Maduka University
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Experience vibrant student life with world-class facilities, diverse
            activities, and a supportive community that fosters growth and
            unforgettable memories.
          </p>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Campus Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Modern Accommodation",
                desc: "Comfortable, secure housing with 24/7 support and modern amenities.",
                image:
                  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                icon: Utensils,
                title: "Dining Services",
                desc: "Diverse culinary options from local to international cuisine, all halal-certified.",
                image:
                  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                icon: Trophy,
                title: "Sports Complex",
                desc: "State-of-the-art facilities for football, basketball, swimming, and fitness.",
                image:
                  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <facility.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Student Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Student Clubs",
                desc: "Over 50 clubs including debate, drama, music, and cultural societies.",
                activities: [
                  "Debate Club",
                  "Drama Society",
                  "Music Band",
                  "Cultural Exchange",
                ],
              },
              {
                icon: Trophy,
                title: "Sports Teams",
                desc: "Compete in inter-university tournaments and stay fit with organized sports.",
                activities: [
                  "Football",
                  "Basketball",
                  "Volleyball",
                  "Athletics",
                ],
              },
              {
                icon: Camera,
                title: "Events & Festivals",
                desc: "Annual cultural festivals, tech conferences, and community service events.",
                activities: [
                  "Cultural Fest",
                  "Tech Summit",
                  "Charity Drives",
                  "Career Fairs",
                ],
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <activity.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.desc}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {activity.activities.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                program: "Computer Science",
                quote:
                  "Maduka University has been an incredible journey. The campus facilities are top-notch, and the community is so welcoming. I've made lifelong friends and gained invaluable skills.",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
              {
                name: "Michael Chen",
                program: "Business Administration",
                quote:
                  "The sports facilities and student clubs keep campus life exciting. Between studying and extracurriculars, there's never a dull moment. The support from faculty is amazing.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.program}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery Preview */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Campus Gallery</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore our beautiful campus through photos. From modern classrooms
            to recreational areas, see what makes Maduka University special.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            ].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Campus ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-300">
            * Images are placeholders. Full gallery will be populated from API
            data.
          </p>
        </div>
      </section>
    </div>
  );
}
