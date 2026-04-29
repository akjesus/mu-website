import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 pt-32">
      <div className="text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-[#00356B] mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-gray-400"
            >
              <path
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.978-5.5-2.5m5.5-9a7.963 7.963 0 015.5 2.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-[#00356B]  mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-black-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#00356B]  text-white rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-[#00356B] text-[#00356B]  rounded-2xl font-semibold hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
