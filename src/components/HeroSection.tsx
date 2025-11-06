import { useEffect, useState } from "react";
import AnimatedCollectibleCards from "./AnimatedCollectibleCards";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrases = [
      { text: "Score & Predict" },
      { text: "Collect & Compete" },
      { text: "Win & Celebrate" },
    ];

    const currentPhrase = phrases[phraseIndex].text;
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  const handleGetStarted = () => {
    const predictionSection = document.getElementById("prediction-section");
    if (predictionSection) {
      predictionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full px-4 flex flex-col items-center justify-between overflow-hidden py-16">
      {/* Top Section - Greeting and Typewriter */}
      <div className="relative z-10 text-center space-y-4">
        {/* Greeting */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-5xl animate-slow-bounce drop-shadow-lg">⚽</span>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Hi Ayoosh!
          </h1>
        </div>

        {/* Typewriter Text */}
        <div className="typewriter-text flex justify-center">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300 min-h-[2.5rem] flex items-center">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </h2>
        </div>
      </div>

      {/* Middle Section - Animated Collectible Cards */}
      <div className="relative z-10 flex-1 w-full max-w-4xl flex items-center justify-center">
        <AnimatedCollectibleCards />
      </div>

      {/* Bottom Section - Get Started Button */}
      <div className="relative z-10 pb-16">
        <button
          onClick={handleGetStarted}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
