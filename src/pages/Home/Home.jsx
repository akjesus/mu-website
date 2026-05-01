import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Laptop, CreditCard } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { X } from "lucide-react";
import clsx from "clsx";
import { fetchPosts } from "../../API/blog";
import parse from "html-react-parser";
import moment from "moment";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [news, setNews] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetchPosts();
        const posts = response.data.data || [];
        const latest = [...posts]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4);
        setNews(latest);
      } catch (error) {
        console.error("Failed to load news posts:", error);
      } finally {
        setNewsLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="pt-0">
      {" "}
      {/* Padding top so content is not hidden under navbar */}
      {/* Hero Section */}
      <section className="relative bg-[#00356B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Welcome to
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Maduka University
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Maduka University is a world-class private University empowering
              students to thrive academically and personally. learning
              facilities, external examiners, and first-rate buildings to
              guarantee standards. We use and deploy cutting-edge technology to
              meet the global standard needs of students and lecturers, thereby
              making education a great experience at Maduka University!. We are
              committed to raising a new generation of leaders, providing an
              enriching learning environment that fosters innovation, critical
              thinking
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://admissions.madukauniversity.edu.ng"
                className="px-6 py-3 bg-white text-[#00356B] rounded-2xl font-semibold shadow-md hover:bg-gray-100"
              >
                Apply Now
              </a>
              <a
                href="/programmes"
                className="px-6 py-3 border border-white rounded-2xl font-semibold hover:bg-white hover:text-[#00356B] transition"
              >
                Explore Programmes
              </a>
            </div>
          </div>
          <motion.img
            src="/images/main.jpg"
            alt="University Illustration"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 mt-12 md:mt-0 max-h-[400px] object-contain"
          />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Maduka?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our university offers top-notch education programs, expert faculty,
            modern infrastructure, and a global community to help you achieve
            your dreams.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-2xl">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Expert Facilities</h3>
              <p className="mt-2 text-gray-600">
                Learn from experienced professors and industry leaders.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-2xl">
              <Laptop className="w-12 h-12 text-indigo-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Serene Environment</h3>
              <p className="mt-2 text-gray-600">
                Flexible and interactive online classes for all courses.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-2xl">
              <CreditCard className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Easy Admissions</h3>
              <p className="mt-2 text-gray-600">
                Apply and pay your admission fees securely with Paystack.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Campus Life Section */}
      <section id="campus-life" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Campus Life</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Stay updated with the latest happenings, events, and activities at
            Maduka University.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder for recent happenings - to be replaced with API data */}
            {[
              {
                title: "Annual Tech Conference",
                date: "April 15, 2026",
                desc: "Join us for the annual tech conference featuring guest speakers from leading tech companies.",
                image: "/images/tech_conf.jpg",
              },
              {
                title: "Cultural Festival",
                date: "May 10, 2026",
                desc: "Celebrate diversity with our multicultural festival showcasing art, music, and cuisine from around the world.",
                image: "/images/cultural_disp.jpg",
              },
              {
                title: "Sports Day",
                date: "June 5, 2026",
                desc: "Watch our students compete in various sports events and cheer for your favorite teams.",
                image: "/images/sports_day.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </div>
            ))}
            <div className="col-span-full text-center">
              <a
                href="/campus-life"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-3 bg-[#00356B] text-white text-center rounded-2xl font-semibold hover:bg-[#002a55] transition"
              >
                More about Campus Life
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="campus-tour" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Campus Tour</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Take a virtual tour around Maduka University.
          </p>
          <div className="relative w-full px-4 md:px-6 lg:px-8 flex justify-center">
            <div className="w-full max-w-5xl h-[70vh] relative overflow-hidden">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://res.cloudinary.com/dkkxdylvp/video/upload/v1756479316/About_MU_school_fcmohw.mp4"
                title="Maduka University Virtual Campus Tour"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Business School Section */}
      <section
        id="business-school"
        className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Maduka Business School</h2>
            <p className="text-black-600 max-w-3xl mx-auto">
              At Maduka University Business School (MUBS), we cultivate
              visionary leaders equipped with knowledge, skills, data-driven
              insights, and a global perspective to drive business success. Our
              MBA program is tailored for ambitious professionals looking to
              accelerate their careers, build strong networks, and stay
              competitive in today’s fast-paced business world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#00356B]">
                Why Choose Maduka Business School?
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Accredited programs with industry recognition
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Experienced faculty with real-world expertise
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Cutting-edge curriculum with emerging trends
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Strong industry partnerships and internships
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Global networking opportunities
                </li>
              </ul>
              <a
                href="https://school.madukauniversity.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 bg-[#00356B] text-white rounded-2xl font-semibold hover:bg-[#002a55] transition"
              >
                Learn More About Business School
              </a>
            </div>
            <div className="text-center">
              <img
                src="/images/bus.jpg"
                alt="Business School Students"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Academic Programmes Section */}
      <section id="academics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Faculties
          </h2>

          {/* Undergraduate Programmes */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Faculty of Nursing Sciences",
                  desc: "Train to become a compassionate and skilled nurse with our comprehensive nursing programs.",
                },
                {
                  name: "Faculty of Business & Social Sciences",
                  desc: "Gain skills in management, finance, and entrepreneurship.",
                },
                {
                  name: "Faculty of Pharmacy",
                  desc: "Study pharmaceutical sciences and develop expertise in drug development and patient care.",
                },
                {
                  name: "Faculty of Computing & Engineering",
                  desc: "Specialize in civil, mechanical, or electrical engineering.",
                },
                {
                  name: "College of Medicine & Health Sciences",
                  desc: "Pursue a career in healthcare with our MBBS program.",
                },
                {
                  name: "Faculty of Law",
                  desc: "Study legal principles and prepare for a legal career.",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition"
                >
                  <BookOpen className="w-12 h-12 text-indigo-600 mx-auto" />
                  <h4 className="mt-4 text-xl font-semibold">{course.name}</h4>
                  <p className="mt-2 text-gray-600">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Latest News</h2>
          {newsLoading ? (
            <div className="text-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#00356B] border-t-transparent animate-spin" />
              <p className="mt-4 text-gray-600">Loading news...</p>
            </div>
          ) : news.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-4">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="h-48 w-full bg-slate-100" />
                  )}
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00356B]">
                      {item.category || "News"}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {parse(item.content?.slice(0, 320) + "...")}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <span>
                        {moment(item.createdAt).format("MMMM D, YYYY")}
                      </span>
                      <span>{item.author || "Maduka Admin"}</span>
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedPost(item)}
                        className="inline-flex items-center justify-center rounded-2xl bg-[#00356B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#002a55] transition"
                      >
                        Read details
                      </button>
                      {item.tags?.length > 0 && (
                        <p className="text-sm text-gray-500">
                          {item.tags.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-8 py-16 text-center text-gray-500">
              Loading the latest news…
            </div>
          )}
        </div>
      </section>
      {/* News detail modal */}
      <Transition show={Boolean(selectedPost)} appear={true}>
        <Dialog
          open={Boolean(selectedPost)}
          onClose={() => setSelectedPost(null)}
          className="relative z-[100]"
        >
          <DialogBackdrop
            transition
            className={clsx([
              "absolute inset-0 bg-black/40 transition ease-in-out",
              "data-closed:opacity-0",
              "data-enter:duration-100 data-enter:data-closed:-translate-x-full",
              "data-leave:duration-300 data-leave:data-closed:translate-x-full",
            ])}
          />

          <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
              <DialogPanel className="relative w-full max-w-[95vw] sm:max-w-2xl transform overflow-auto rounded-3xl bg-white text-left shadow-xl transition-all">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="p-2 sm:p-4 md:p-6 lg:p-8">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00356B]">
                    {selectedPost?.category || "News"}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {selectedPost?.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span>
                      {moment(selectedPost?.createdAt).format("MMMM D, YYYY")}
                    </span>
                    <span>{selectedPost?.author || "Maduka Admin"}</span>
                  </div>
                  {selectedPost?.image ? (
                    <img
                      src={selectedPost.image}
                      alt={selectedPost?.title}
                      className="mt-6 h-48 sm:h-72 w-full rounded-3xl object-cover"
                    />
                  ) : (
                    <div className="mt-6 h-72 w-full rounded-3xl bg-slate-100" />
                  )}
                  <div className="mt-6 space-y-6 text-gray-700 break-words overflow-x-hidden">
                    <div className="space-y-2">
                      <div className="prose prose-sm max-w-none text-gray-700">
                        {selectedPost?.content
                          ? parse(selectedPost.content)
                          : "No details available."}
                      </div>
                    </div>
                    {selectedPost?.tags?.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-gray-900">
                          Tags
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedPost.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 text-right">
                    <button
                      type="button"
                      onClick={() => setSelectedPost(null)}
                      className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* Admission Section */}
      <section
        id="admission"
        className="relative bg-[#00356B] text-white text-center py-20"
      >
        <h2 className="text-3xl font-bold">
          Admissions Open for 2026/2027 Academic Session
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Apply online now and secure your spot in our world-class programs.
        </p>
        <a
          href="https://admissions.madukauniversity.edu.ng"
          className="mt-6 inline-block px-8 py-3 bg-white text-[#00356B] rounded-2xl font-semibold shadow-md hover:bg-gray-100"
        >
          Start Admission
        </a>
      </section>
      <Transition show={open} appear={true}>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="relative z-[100]"
        >
          <DialogBackdrop
            transition
            className={clsx([
              // Base styles
              "absolute w-48 border transition ease-in-out",
              // Shared closed styles
              "data-closed:opacity-0",
              // Entering styles
              "data-enter:duration-100 data-enter:data-closed:-translate-x-full",
              // Leaving styles
              "data-leave:duration-300 data-leave:data-closed:translate-x-full",
            ])}
          />

          <div className="fixed inset-0 z-[100] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold text-gray-900"
                      >
                        Announcement!
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Maduka University announces the commencement of
                          registration of candidates for admission and school
                          fees structure for the 2026/2027 academic session.
                        </p>
                        <p className="text-sm text-gray-500">
                          Maduka University Enugu has announced the registration
                          of candidates for admission for the 2026/2027 academic
                          session. The University has also released its fee
                          structure for the new academic year, which offers a
                          range of programmes across various disciplines.
                        </p>
                        <p className="text-sm text-gray-500">
                          The announcement follows the release of the 2026 UTME
                          results by JAMB. Our cut-off mark is the minimum
                          approved by JAMB for the 2026/2027 academic session.
                        </p>
                        <p className="text-sm text-gray-500">
                          Prospective students can apply into undergraduate
                          programmes in the Schools of Business & Social
                          Sciences, Computing, Engineering, College of Medical
                          Sciences, Health Sciences, Pharmacy, and Law. Maduka
                          University's 2026/2027 fee structure is designed with
                          quality and affordability in mind.
                        </p>
                        <h5 className="font-semibold text-gray-700">
                          Tuition & Accommodation Fees
                        </h5>
                        <div className="mt-4 space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Faculty of Computing & Engineering:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>B.Sc. Computer Science – ₦900,000</li>
                              <li>B.Sc. Cyber Security – ₦900,000</li>
                              <li>B.Sc. Software Engineering – ₦900,000</li>
                              <li>B.Eng. Civil Engineering – ₦900,000</li>
                              <li>B.Eng. Mechanical Engineering – ₦900,000</li>
                              <li>
                                B.Eng. Mechatronics Engineering – ₦900,000
                              </li>
                              <li>B.Eng. Computer Engineering – ₦900,000</li>
                              <li>
                                B.Eng. Electrical & Electronics Engineering –
                                ₦900,000
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Faculty of Business & Social Sciences:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>B.Sc. Accounting – ₦800,000</li>
                              <li>B.Sc. Economics – ₦800,000</li>
                              <li>B.Sc. Mass Communication – ₦800,000</li>
                              <li>B.Sc. International Relations – ₦800,000</li>
                              <li>B.Sc. Transport Management – ₦800,000</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              College of Medicine & Health Sciences:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>MBBS – Medicine and Surgery – ₦4,210,000</li>
                              <li>B.Sc. Radiography – ₦1,200,000</li>
                              <li>
                                BMLS – Medical Laboratory Science – ₦1,200,000
                              </li>
                              <li>B.Sc. Public Health – ₦900,000</li>
                              <li>DPT – Physiotherapy – ₦900,000</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Faculty of Nursing Sciences:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>B.Sc. Nursing – ₦1,710,000</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Faculty of Pharmacy:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>Pharm D – ₦1,710,000</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Faculty of Law:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>LLB – Law – ₦1,710,000</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              IJMB Programme:
                            </h5>
                            <p className="text-sm text-gray-500 ml-4">
                              ₦800,000
                            </p>
                            <p className="text-sm text-gray-500 ml-4">
                              Duration: 2 semesters
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Admission Options:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>Direct Entry Candidates</li>
                              <li>Transfer Students</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Additional Information:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>Application Form – ₦5,000</li>
                              <li>Acceptance Fee – ₦50,000 (non-refundable)</li>
                              <li>Feeding – Pay as you eat</li>
                              <li>IJMB Students – One-time payment</li>
                              <li>
                                Other Students – 60% / 40% installment option
                              </li>
                              <li>No other charges / fees</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700">
                              Contact Information:
                            </h5>
                            <ul className="list-disc list-inside text-sm text-gray-500 ml-4">
                              <li>Rose – 08055091802 / 08065356367</li>
                              <li>Henry – 09157893107</li>
                              <li>
                                Admission Forms –
                                <a
                                  href="https://admissions.madukauniversity.edu.ng"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  admissions.madukauniversity.edu.ng
                                </a>
                              </li>
                              <li>
                                Email –{" "}
                                <a
                                  href="mailto:admission@madukauniversity.edu.ng"
                                  className="text-blue-500 hover:underline"
                                >
                                  admission@madukauniversity.edu.ng
                                </a>
                              </li>
                              <li>
                                Website –{" "}
                                <a
                                  href="https://madukauniversity.edu.ng"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  madukauniversity.edu.ng
                                </a>
                              </li>
                            </ul>
                          </div>
                          <p className="text-sm text-gray-500 mt-4">
                            Maduka University — Building the Future Through
                            Excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
