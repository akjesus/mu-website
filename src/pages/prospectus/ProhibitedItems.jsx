
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  FileText,
  Shield,
  XCircle,
} from "lucide-react";

export default function ProhibitedItems() {
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

        {/* Section B */}
        <motion.section {...fadeInUp} className="px-2 py-8 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#00356B] rounded-xl">
              <BookOpen className="w-6 h-6 text-white-700" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00356B]">
                C. Materials Recommended
              </h2>
              <p className="text-black">
                Items to bring for comfortable campus life
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedItems.map((category, index) => (
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

        {/* Section C */}
        <motion.section {...fadeInUp} className="px-2 py-8 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00356B]">
                D. Items Prohibited
              </h2>
              <p className="text-black">
                For safety and security, these items are not allowed
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {prohibitedItems.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-red-500/10 border border-red-500/20 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon
                    className={`w-5 h-5 ${
                      category.color === "red"
                        ? "text-red-400"
                        : category.color === "orange"
                          ? "text-orange-400"
                          : "text-blue-400"
                    }`}
                  />
                  <h3 className="text-lg font-semibold text-[#00356B]">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
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

const prohibitedItems = [
  {
    category: "Controlled Substances",
    items: [
      "Prescription drugs such as Raphenol, Tramadol, drugs with Codeine",
      "Hard drugs such as Marijuana, Cocaine, Heroin, etc",
      "Cigarettes, including e-cigarettes, Vaping accessories, Shisha",
      "Alcoholic beverages and Drinks",
    ],
    icon: Shield,
    color: "red",
  },
  {
    category: "Weapons & Dangerous Items",
    items: [
      "Lethal weapons and injections",
      "Kitchen knives",
      "Guns and Bullets",
      "Bangers (Knockouts, fireworks and explosives)",
    ],
    icon: AlertTriangle,
    color: "orange",
  },
  {
    category: "Fire Hazards",
    items: [
      "Kerosene Lamps, gas Lamps, gas cookers",
      "Candles, Matches and Lighters",
    ],
    icon: AlertTriangle,
    color: "red",
  },
  {
    category: "Electrical Appliances",
    items: [
      "Cooking utensils such as hot plates, rice cookers",
      "Refrigerators, grillers, ovens and microwave ovens",
      "TV sets",
      "Washing machines",
      "Adaptors/15Amps/2pin plug electronic gadgets",
    ],
    icon: XCircle,
    color: "blue",
  },
  {
    category: "Entertainment & Gaming",
    items: [
      "Video machines, tapes, DVD & Amp, VCD players",
      "TV card, antennas",
      "Smart Watch",
      "Computer games (play station, x-boxes)",
      "Loud speakers",
    ],
    icon: XCircle,
    color: "blue",
  },
  {
    category: "Other Prohibited Items",
    items: [
      "Items for sale",
      "Diabolic materials",
      "Faded and tattered jeans, chinos and corduroy",
      "Pornographic materials",
      "Dumbbells or any other Gym equipment",
      "Condoms and Contraceptives",
      "Metal clothes hangers",
      "Glass bottled perfumes/roll-on or any material packaged in glass containers",
      "Any other thing that can cause injuries",
    ],
    icon: XCircle,
    color: "red",
  },
];

const admissionDocuments = [
  "Originals and four photocopies of each of Notification of Admission",
  "JAMB UTME result slip",
  "WASSCE/NECO/other qualifying results",
  "References from the last school attended",
  "Candidate's Spiritual Leader reference",
  "Parental/Guardian Declaration of Support and Commitment",
  "Candidate's Personal Statement - (What I intend to achieve at Maduka University)",
];

const recommendedItems = [
  { category: "Weather Protection", items: ["Umbrella", "Rain coat"] },
  { category: "Personal Care", items: ["Toiletries", "Tissue paper"] },
  {
    category: "Electronics",
    items: [
      "Rechargeable Lamps",
      "Torchlight",
      "Laptop (if available)",
      "Telephone (any type)",
    ],
  },
  { category: "Bedding", items: ["Bed-sheets", "Blankets", "Mosquito Nets"] },
  {
    category: "Kitchen Items",
    items: ["Food Flasks and hot water Flasks", "Plates, Cups and Cutlery"],
  },
  {
    category: "Cleaning",
    items: ["Buckets and water bailing Bowls", "Brooms and Mops"],
  },
  {
    category: "Clothing",
    items: [
      "Plastic Hangers",
      "Decent Clothes, Sandals and Shoes",
      "Sport wear and Trainers",
    ],
  },
];
