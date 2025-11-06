import { useState, useRef } from "react";
import floatingButtonIcon from "../assets/floating_botton.png";

interface ChanceEvent {
  id: number;
  isGoal: boolean;
}

const FloatingButton = () => {
  const [chances, setChances] = useState<ChanceEvent[]>([]);
  const [nextId, setNextId] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const isGoal = randomNumber % 2 === 0;

    const newChance: ChanceEvent = { id: nextId, isGoal };
    setChances((prev) => [...prev, newChance]);
    setNextId((prev) => prev + 1);

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);

    setTimeout(() => {
      setChances((prev) => prev.filter((c) => c.id !== newChance.id));
    }, 3000);
  };

  return (
    <>
      {/* Message Toast */}
      {showMessage && (
        <div className="fixed bottom-32 right-8 z-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg animate-in fade-in duration-300">
          <p className="font-semibold text-center">Test your chance today! 🍀</p>
        </div>
      )}

      {/* Goal and Ball Animation */}
      {chances.map((chance) => (
        <div key={chance.id} className="fixed inset-0 pointer-events-none z-30">
          {/* Goal Icon at top center */}
          <div className="fixed top-24 left-1/2 -translate-x-1/2 text-6xl animate-pulse">
            🥅
          </div>

          {/* Animated Ball */}
          {chance.isGoal ? (
            <div
              className="fixed text-4xl"
              style={{
                left: "50%",
                bottom: "32px",
                animation: "ball-to-goal-responsive 2.5s ease-in forwards",
              }}
            >
              ⚽
            </div>
          ) : (
            <div
              className="fixed text-4xl"
              style={{
                left: "50%",
                bottom: "32px",
                animation: "ball-random-miss 2.5s ease-in forwards",
              }}
            >
              ⚽
            </div>
          )}
        </div>
      ))}

      <style>{`
        @keyframes ball-random-miss {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          25% {
            transform: translateX(-50%) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: translateX(-150px) translateY(-200px);
            opacity: 1;
          }
          75% {
            transform: translateX(50px) translateY(-150px);
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(-300px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Floating Button - Icon Only */}
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 transform hover:scale-110 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center"
        aria-label="Test your chance"
      >
        <img src={floatingButtonIcon} alt="Test your chance" className="w-full h-full object-contain" />
      </button>
    </>
  );
};

export default FloatingButton;
