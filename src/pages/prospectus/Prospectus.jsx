import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import ProhibitedItems from "./ProhibitedItems";
import RegistrationRequirements from "./RegistrationItems";
import {useEffect, useState} from "react";

export default  function ProspectusPage() {

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const res = await fetch(
          `https://api.portal.madukauniversity.edu.ng/api/student-documents/show`
        );

        const { success, data } = await res.json();
        if (success) setDocuments(data);
      }
      catch (error) {
        console.error("Error fetching documents:", error);
      }
    }

    fetchDocuments();
  }, []);

  return (
    <div className="min-h-screen text-gray-700 dark:text-gray-300">
      <Navbar />
      <Header />
      <RegistrationRequirements documents={documents} />

      <ProhibitedItems />
    </div>
  );
}