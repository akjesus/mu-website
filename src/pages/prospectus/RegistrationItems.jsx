
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, FileText } from "lucide-react";

export default function RegistrationRequirements({ documents }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section A */}
        <motion.section {...fadeInUp} className="px-2 py-8 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#00356B] rounded-xl">
              <FileText className="w-6 h-6 text-white-700" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00356B]">
                A. Documents to Fill Before/During Registration
              </h2>
              <p className="text-[#00356B]">
                Complete and submit these forms as part of your admission
                process
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {registrationForms.map((doc, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 bg-white rounded-lg hover:bg-white/10 shadow-sm transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 text-[#00356B] flex-shrink-0 mt-0.5" />
                <span className="text-black">{doc}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <div className="flex flex-col items-center">
          <h1 className="text-center md:text-4xl text-[#00356B] font-semibold text-xl">
            Essential information for new students joining Maduka University
          </h1>

          <main className="p-2 md:p-6">
            <div className="w-full p-4 mb-6">
              <h2 className="text-[#00356B] font-bold text-xl mb-4 text-center">
                Download Important Prospectus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents &&
                  documents.length > 0 &&
                  documents.map((item, index) => (
                    <a
                      key={item._id}
                      href={item.file}
                      className={`justify-between w-full  ${
                        index % 2
                          ? "bg-[#00356B] hover:bg-blue-900 text-white"
                          : "bg-[#00356B] hover:bg-blue-900 text-white"
                      } font-medium flex items-center py-2 px-4 rounded transition-colors`}
                    >
                      <span className="text-sm md:text-lg">{item.title}</span>
                      <span className="float-right">↓</span>
                    </a>
                  ))}
              </div>
            </div>
          </main>
        </div>

        {/* Section B */}
        <motion.section {...fadeInUp} className="px-2 py-8 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#00356B] rounded-xl">
              <BookOpen className="w-6 h-6 text-white-700" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00356B]">
                B. Additional Items Required for Registration
              </h2>
              <p className="text-[#00356B]">
                Documents and essentials you must present upon registration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalItems.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-sm rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-[#00356B] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00356B] rounded-full" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00356B] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

// Data
const registrationForms = [
  "State of Origin certificate",
  "Local Government Area certificate (Attach identification letter)",
  "Notification of Maduka University Admission Letter (original + 8 copies)",
  "JAMB UTME result slip (original + 8 copies)",
  "First School Leaving Certificate (original + 8 copies)",
  "Senior Secondary Certificate (WAEC/NECO/NABTEB) (original + 8 copies)",
  "References from last school attended",
  "Evidence of payment of Acceptance and School Fees (with photocopies)",
  "Attestation letter from candidate’s spiritual leader",
  "Parental/Guardian/Sponsor Declaration of Support & Commitment",
  "Candidate’s Personal Statement – (Intentions at Maduka University)",
  "Undertaking form (Parent/Guardian/Sponsor)",
  "Undertaking form (Student)",
  "Course Registration Form (completed online)",
];

const additionalItems = [
  {
    category: "Photographs",
    items: [
      "Eight (8) Red-background passport photographs",
      "Name & signature at the back of each passport",
    ],
  },
  {
    category: "Medical Requirements",
    items: [
      "Medical Certificate from Government Approved Hospital (issued within one month of admission)",
    ],
  },
];
