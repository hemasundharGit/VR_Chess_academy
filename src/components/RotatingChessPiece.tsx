"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export function RotatingChessPiece() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Note: The path is relative to the `public` directory.
    // The filename has spaces, which are URL-encoded to %20.
    const animationPath = "/animations/Animation%20-%201750868903965.json";
    
    fetch(animationPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error fetching or parsing Lottie animation:", error));
  }, []);

  if (!animationData) {
    // Show a placeholder while the animation is loading.
    return <div className="w-64 h-64 md:w-80 md:h-80 bg-muted rounded-full" />;
  }

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
