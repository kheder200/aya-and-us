import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles } from "lucide-react";
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

  const displayedCards = showAll ? allCards : allCards.slice(0, 4);
  const featuredCard = allCards[0];

  const albumStats = useMemo(
    () => [
      { label: "Album level", value: "Gold III", note: "+2 boosts this week" },
      { label: "Legendary set", value: "7 / 12", note: "3 more for full shine" },
      { label: "Trade streak", value: "5 days", note: "Keep momentum!" },
    ],
    []
  );

  return (
    <section className="px-4 py-6">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 via-secondary/10 to-background/40 px-5 py-6 shadow-purple backdrop-blur">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-sm">
            <Badge variant="outline" className="mb-3 flex items-center gap-2 border-white/30 text-xs uppercase tracking-tight text-white">
              <Sparkles className="h-3.5 w-3.5 text-amber-200" />
              Album spotlight
            </Badge>
            <h2 className="text-2xl font-bold text-white">
              Aya&apos;s collection is glowing
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Legendary pulls, boosted chemistry, and a fierce new layout for your digital album.
              Stack wins, swap icons, and keep the streak alive.
            </p>
          </div>
          <div className="mx-auto sm:mx-0">
            <PlayerCard
              playerName={featuredCard.name}
              playerNumber={featuredCard.number}
              rarity={featuredCard.rarity}
              imageUrl={featuredCard.image}
              emoji={featuredCard.emoji}
              className="w-[180px]"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {albumStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white/80 backdrop-blur-sm"
            >
              <p className="text-[11px] uppercase tracking-wide">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
              <p className="text-[11px] text-white/70">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Latest Cards for Your Album
          </h3>
          <p className="text-sm text-muted-foreground">
            Handpicked players and shiny new variants synced from Aya&apos;s weekly packs.
          </p>
        </div>
        <Button
          variant="ghost"
          className="inline-flex items-center gap-1 self-start rounded-full text-primary hover:bg-primary/10"
        >
          View album
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {displayedCards.map((card, index) => (
          <PlayerCard
            key={`${card.name}-${index}`}
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
        className="mt-6 w-full rounded-2xl border border-primary/40 bg-gradient-to-r from-primary to-secondary py-5 text-primary-foreground shadow-purple transition-shadow hover:shadow-glow"
      >
        {showAll ? "Show less cards" : "Expand collection"}
      </Button>
    </section>
  );
};

export default RecentCollections;
