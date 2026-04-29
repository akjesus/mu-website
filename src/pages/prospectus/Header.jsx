import { Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32">
      <div className="container mx-auto px-4 relative z-10">
        <section className="relative bg-[#00356B] text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Undergraduate <span className="underline">Prospectus</span>
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Essential information for new students joining Maduka University
            </p>
            <h3 className="text-yellow-400 font-semibold mb-2">
              IMPORTANT NOTICE
            </h3>
            <p className="text-gray-200 text-sm md:text-md">
              We desire our students to be very comfortable in pursuit of their
              academic programmes. This prospectus contains information on what
              fresh men and women are required to bring with them and what is
              PROHIBITED. Please READ THROUGH carefully.
            </p>
          </div>
        </section>
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
