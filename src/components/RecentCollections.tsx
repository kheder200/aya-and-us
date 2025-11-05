import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PlayerCard from "./PlayerCard";
import playerCard1 from "@/assets/player-card-1.png";
import playerCard2 from "@/assets/player-card-2.png";
import playerCard3 from "@/assets/player-card-3.png";

const RecentCollections = () => {
  const [showAll, setShowAll] = useState(false);

  const allCards = [
    { name: "Rosa Strike", number: 10, rarity: "legendary" as const, image: playerCard1 },
    { name: "Azure Ace", number: 7, rarity: "rare" as const, image: playerCard2 },
    { name: "Violet Power", number: 5, rarity: "rare" as const, image: playerCard3 },
    { name: "Golden Star", number: 11, rarity: "legendary" as const, emoji: "⭐" },
    { name: "Green Thunder", number: 9, rarity: "rare" as const, emoji: "⚡" },
  ];

  const displayedCards = showAll ? allCards : allCards.slice(0, 3);

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground">
          New Cards for Your Collection!
        </h2>
        <Button variant="ghost" className="text-primary font-semibold text-sm p-0 h-auto hover:bg-transparent">
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {displayedCards.map((card, index) => (
          <PlayerCard 
            key={index}
            playerName={card.name}
            playerNumber={card.number}
            rarity={card.rarity}
            imageUrl={card.image}
            emoji={card.emoji}
          />
        ))}
      </div>

      <Button 
        onClick={() => setShowAll(!showAll)}
        className="w-full bg-secondary text-secondary-foreground font-bold py-6 rounded-2xl shadow-purple hover:shadow-glow transition-all hover:scale-105"
      >
        {showAll ? "Show Less" : "View My Full Album"}
      </Button>
    </div>
  );
};

export default RecentCollections;
