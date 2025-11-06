import { useState, useRef } from "react";
import floatingButtonIcon from "../assets/floating_botton.png";

interface ChanceEvent {
  id: number;
  isGoal: boolean;
  stage: "intro" | "countdown" | "animation" | "result";
  countdown?: number;
  result?: "goal" | "miss";
}

const FloatingButton = () => {
  const [chances, setChances] = useState<ChanceEvent[]>([]);
  const [nextId, setNextId] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (isActive) return;

    setIsActive(true);
    const randomNumber = Math.floor(Math.random() * 100);
    const isGoal = randomNumber % 2 === 0;
    const id = nextId;
    setNextId((prev) => prev + 1);

    const newChance: ChanceEvent = { id, isGoal, stage: "intro" };
    setChances((prev) => [...prev, newChance]);

    setTimeout(() => {
      setChances((prev) =>
        prev.map((c) => (c.id === id ? { ...c, stage: "countdown", countdown: 3 } : c))
      );
    }, 2500);

    let countdown = 3;
    const countdownInterval = setInterval(() => {
      countdown--;
      setChances((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, countdown } : c
        )
      );

      if (countdown === 0) {
        clearInterval(countdownInterval);
        setTimeout(() => {
          setChances((prev) =>
            prev.map((c) =>
              c.id === id ? { ...c, stage: "animation" } : c
            )
          );

          setTimeout(() => {
            setChances((prev) =>
              prev.map((c) =>
                c.id === id
                  ? { ...c, stage: "result", result: isGoal ? "goal" : "miss" }
                  : c
              )
            );

            setTimeout(() => {
              setChances((prev) => prev.filter((c) => c.id !== id));
              setIsActive(false);
            }, 2000);
          }, 2500);
        }, 500);
      }
    }, 1000);
  };

  return (
    <>
      {/* Overlay and Sequence */}
      {chances.map((chance) => (
        <div key={chance.id}>
          {/* Blur Overlay */}
          {(chance.stage === "intro" || chance.stage === "countdown") && (
            <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-500" />
          )}

          {/* Intro Message - Let's test your chance today */}
          {chance.stage === "intro" && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className="text-center animate-in fade-in duration-500">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  Let's test your chance today! 
                </p>
              </div>
            </div>
          )}

          {/* Countdown 3 2 1 */}
          {chance.stage === "countdown" && chance.countdown !== undefined && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className="text-center animate-in fade-in duration-300">
                <p className="text-9xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">
                  {chance.countdown}
                </p>
              </div>
            </div>
          )}

          {/* Goal and Ball Animation */}
          {(chance.stage === "animation" || chance.stage === "result") && (
            <div className="fixed inset-0 pointer-events-none z-30">
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
          )}

          {/* Result Message */}
          {chance.stage === "result" && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className="text-center animate-in fade-in duration-500">
                {chance.result === "goal" ? (
                  <p className="text-6xl font-bold text-green-500 dark:text-green-400 drop-shadow-lg">
                    GOOOAAL! 🎉
                  </p>
                ) : (
                  <p className="text-5xl font-bold text-red-500 dark:text-red-400 drop-shadow-lg">
                    Sorry, try again! 😅
                  </p>
                )}
              </div>
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
        disabled={isActive}
        className={`fixed bottom-8 right-8 z-40 w-16 h-16 transform transition-all duration-300 ease-out flex items-center justify-center ${
          isActive ? "opacity-50 cursor-not-allowed" : "hover:scale-110 active:scale-95"
        }`}
        aria-label="Test your chance"
      >
        <img src={floatingButtonIcon} alt="Test your chance" className="w-full h-full object-contain" />
      </button>
    </>
  );
};

export default FloatingButton;
