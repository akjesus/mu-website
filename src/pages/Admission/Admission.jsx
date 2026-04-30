import { useState } from "react";

export default function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit + Razorpay link
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    // Open Razorpay link
    window.open("https://rzp.io/rzp/2kD3Hbl", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Online Admission Form
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Fill in your details and complete admission payment securely.
        </p>

        <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-gray-700 font-medium">Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose a course</option>
              <option value="">BCA</option>
              <option value="">MCA</option>
              <option value="">LLB</option>
              <option value="">LLM</option>
              <option value="">BA</option>
              <option value="">B.Tech(AI/ML)</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Pay Admission Fee & Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
