"use client";

import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingWhatsAppButton() {
  const coachPhoneNumber = "919581581595";
  const preFilledMessage = "Hello! I'm interested in the chess coaching at VR Chess Academy.";
  const whatsappUrl = `https://wa.me/${coachPhoneNumber}?text=${encodeURIComponent(preFilledMessage)}`;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById("page-footer");
    if (!footer) return;

    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Hide button if the top of the footer is inside the viewport
      if (footerTop < windowHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
        !isVisible && "opacity-0 translate-y-full pointer-events-none"
      )}
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
