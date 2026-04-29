import { BookOpen, Users, Clock, } from "lucide-react";
import { motion } from "framer-motion";

export default function Courses() {
  const courses = [
    {
      title: "Faculty of Computing & Engineering",
      description:
        "Gain technical expertise in civil, mechanical, and electrical fields with industry projects",
      duration: "5 Years",
      price: "₦900,000 / year",
      teacher: "Dr. Asha Verma",
      img: "https://media.istockphoto.com/id/1395428816/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?s=612x612&w=0&k=20&c=pG8hCoqokgF-szNZJjDrqi-4gxYKRxth-RcyG2wI9u8=",
    },
    {
      title: "Faculty of Business & Social Sciences",
      description:
        "Develop leadership, management, and entrepreneurial skills for the global business world.",
      duration: "3 Years",
      price: "₦800,000 / year",
      teacher: "Prof. Raj Malhotra",
      img: "https://www.shutterstock.com/image-photo/mba-master-business-administration-program-600nw-2434045027.jpg",
    },
    {
      title: "Faculty of Nursing Sciences",
      description:
        "Master data analytics, machine learning, and big data tools to solve real-world problems.",
      duration: "4 Years",
      price: " ₦1,710,000 / year",
      teacher: "Dr. Neha Sharma",
      img: "https://www.kdnuggets.com/wp-content/uploads/awan_7_free_data_science_platform_beginners_1.png",
    },
    {
      title: "Faculty of Law",
      description:
        "Understand human behavior, mental health, and cognitive processes with practical exposure.",
      duration: "5 Years",
      price: "₦1,710,000 / year",
      teacher: "Dr. Priya Kapoor",
      img: "https://thumbs.dreamstime.com/b/counseling-young-women-one-attendants-psychological-course-77250783.jpg",
    },
    {
      title: "College of Medical & Health Sciences",
      description: "",
      duration: "5 Years",
      price: "₦4,210,000 / year",
      teacher: "Prof. Anil Mehra",
      img: "https://media.istockphoto.com/id/1395428816/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?s=612x612&w=0&k=20&c=pG8hCoqokgF-szNZJjDrqi-4gxYKRxth-RcyG2wI9u8=",
    },
    {
      title: "Faculty of Pharmacy",
      description:
        "Explore the world of pharmaceuticals, drug development, and healthcare with practical labs.",
      duration: "5 Years",
      price: "₦1,710,000 / year",
      teacher: "Ms. Kavita Nair",
      img: "https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-32">
      <section className="relative bg-[#00356B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Our Programmes
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Choose from a wide range of courses designed to equip you with the
            knowledge and skills to succeed. Our friendly lecturers ensure a
            supportive learning environment.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Courses Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#00356B]">
                  {course.title}
                </h2>
                <p className="mt-3 text-black-600">{course.description}</p>

                {/* Course Info */}
                <div className="mt-4 flex items-center text-gray-500 text-sm space-x-4">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    {course.price}
                  </span>
                </div>

                {/* Teacher Info */}
                {/* <div className="mt-6 flex items-center gap-3">
                  <Users className="w-10 h-10 text-[#00356B] bg-blue-100 rounded-full p-2" />
                  <div>
                    <p className="font-medium text-black-800">
                      {course.teacher}
                    </p>
                  </div>
                </div> */}

                {/* Enroll Button */}
                <div className="mt-6 text-center">
                  <a
                    href="/admission"
                    className="inline-block px-6 py-2 bg-[#00356B] text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
