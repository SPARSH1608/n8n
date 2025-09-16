import React, { useState } from "react";
import CircularImageGallery from "@/components/SphereImageGallery";
import AuthModal from "@/components/AuthModal";

const LandingPage = () => {
  const [showAuthModal, setShowAuthModal] = useState<null | "signup" | "signin">(null);

  return (
    <div className="">
      <nav className="w-full px-8 py-4 flex justify-end items-center top-0 left-0 z-50 relative">
        <button
          className="mr-4 px-6 py-2 rounded-md bg-black text-white font-bold transition"
          onClick={() => setShowAuthModal("signup")}
        >
          Sign Up
        </button>
        <button
          className="px-6 py-2 rounded-md text-black-500 font-bold border bg-white hover:bg-blue-50 transition"
          onClick={() => setShowAuthModal("signin")}
        >
          Sign In
        </button>
      </nav>
      {/* <div className="mt-[-60px]">
        <CircularImageGallery />
      </div> */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(null)}
          initialMode={showAuthModal}
        />
      )}
    </div>
  );
};

export default LandingPage;