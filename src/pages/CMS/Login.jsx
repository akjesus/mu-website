import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import Swal from "sweetalert2";

const validUser = {
  email: "admin@madukauniversity.edu.ng",
  password: "Maduka@2026",
};

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem("cms-auth") === "true",
  );

  useEffect(() => {
    if (authenticated) {
      navigate("/cms/manage", { replace: true });
    }
  }, [authenticated, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      form.email === validUser.email &&
      form.password === validUser.password
    ) {
      localStorage.setItem("cms-auth", "true");
      setAuthenticated(true);
      Swal.fire("Welcome!", "You are now authenticated.", "success");
      return;
    }
    Swal.fire(
      "Authentication Failed",
      "Please enter valid credentials.",
      "error",
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-[#00356B] text-white px-8 py-10 text-center">
            <h1 className="text-4xl font-bold mb-3">CMS Login</h1>
            <p className="text-gray-100 max-w-2xl mx-auto">
              Authenticate as a blog author to access the post management area
              of Maduka University.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email address
                </label>
                <div className="relative rounded-xl shadow-sm overflow-hidden border border-gray-200 focus-within:border-[#00356B]">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-none bg-transparent py-3 pl-12 pr-4 focus:outline-none"
                    placeholder="admin@madukauniversity.edu.ng"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <div className="relative rounded-xl shadow-sm overflow-hidden border border-gray-200 focus-within:border-[#00356B]">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border-none bg-transparent py-3 pl-12 pr-4 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#00356B] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#002a55] transition"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full rounded-2xl border border-gray-300 bg-white px-6 py-3 text-gray-700 font-semibold shadow-sm hover:bg-gray-100 transition"
              >
                Go to Home
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
