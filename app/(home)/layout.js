import React, { Suspense } from "react";
import "../../style.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";
import LoadingUi from "@/components/LoadingUi";
const HomeLayout = ({ children }) => {
  return (
    <Suspense fallback={<LoadingUi />}>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </Suspense>
  );
};

export default HomeLayout;
