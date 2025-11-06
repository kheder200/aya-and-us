import { useMemo } from "react";
import playerCard1 from "../assets/player-card-1.png";
import playerCard2 from "../assets/player-card-2.png";
import playerCard3 from "../assets/player-card-3.png";

interface AnimatedCard {
  id: number;
  image: string;
  delay: number;
  position: "left" | "center" | "right";
  duration: number;
}

const AnimatedCollectibleCards = () => {
  const cards: AnimatedCard[] = useMemo(
    () => [
      {
        id: 1,
        image: playerCard1,
        delay: 0,
        position: "left",
        duration: 4,
      },
      {
        id: 2,
        image: playerCard2,
        delay: 0.5,
        position: "center",
        duration: 3.5,
      },
      {
        id: 3,
        image: playerCard3,
        delay: 1,
        position: "right",
        duration: 4.5,
      },
    ],
    []
  );

  const getAnimationStyle = (card: AnimatedCard) => {
    const baseStyle: React.CSSProperties = {
      animationDuration: `${card.duration}s`,
      animationDelay: `${card.delay}s`,
      animationFillMode: "both",
    };

    if (card.position === "left") {
      return {
        ...baseStyle,
        animation: `float-left ${card.duration}s ease-in-out ${card.delay}s infinite`,
      };
    } else if (card.position === "center") {
      return {
        ...baseStyle,
        animation: `float-center ${card.duration}s ease-in-out ${card.delay}s infinite`,
      };
    } else {
      return {
        ...baseStyle,
        animation: `float-right ${card.duration}s ease-in-out ${card.delay}s infinite`,
      };
    }
  };

  return (
    <>
      <style>{`
        @keyframes float-left {
          0% {
            opacity: 0;
            transform: translateX(-280px) translateY(0px) rotateZ(25deg) scale(0.4);
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateX(-80px) translateY(-40px) rotateZ(-5deg) scale(1);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100px) translateY(60px) rotateZ(-25deg) scale(0.3);
          }
        }

        @keyframes float-center {
          0% {
            opacity: 0;
            transform: translateY(150px) scale(0.3) rotateZ(0deg);
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateY(-30px) scale(1) rotateZ(360deg);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-150px) scale(0.3) rotateZ(450deg);
          }
        }

        @keyframes float-right {
          0% {
            opacity: 0;
            transform: translateX(280px) translateY(0px) rotateZ(-25deg) scale(0.4);
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translateX(80px) translateY(-40px) rotateZ(5deg) scale(1);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-100px) translateY(60px) rotateZ(25deg) scale(0.3);
          }
        }
      `}</style>

      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {cards.map((card) => (
            <div
              key={card.id}
              style={getAnimationStyle(card)}
              className="absolute w-28 h-40 flex items-center justify-center rounded-2xl shadow-xl shadow-blue-400/20 dark:shadow-blue-500/15 overflow-hidden"
            >
              <img src={card.image} alt={`Card ${card.id}`} className="w-full h-full object-cover rounded-2xl" />
            </div>
          ))}
        </div>

        <div className="relative w-32 h-44 rounded-2xl border-4 border-dashed border-blue-300/40 dark:border-blue-500/40 backdrop-blur-sm flex items-center justify-center text-xs font-semibold text-blue-400/60 dark:text-blue-500/60 text-center px-2">
          Collect Cards
        </div>
      </div>
    </>
  );
};

export default AnimatedCollectibleCards;
