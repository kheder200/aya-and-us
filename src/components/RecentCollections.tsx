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
    { name: "Rosa Strike", number: 1, rarity: "legendary" as const, image: playerCard1 },
    { name: "Azure Ace", number: 7, rarity: "rare" as const, image: playerCard2 },
    { name: "Violet Power", number: 5, rarity: "rare" as const, image: playerCard3 },
    { name: "Golden Star", number: 2, rarity: "legendary" as const, emoji: "⭐" },
    { name: "Green Thunder", number: 9, rarity: "rare" as const, emoji: "⚡" },
  ];

  const ownedCards = allCards.slice(0, 3);
  const upcomingCards = allCards.slice(3);
  const displayedCards = showAll ? allCards : ownedCards;
  const featuredCard = ownedCards[0];

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
      <div className="overflow-hidden rounded-3xl border border-primary/30 bg-white/90 px-5 py-6 shadow-lg shadow-primary/20 backdrop-blur dark:border-white/10 dark:bg-gradient-to-br dark:from-primary/15 dark:via-secondary/10 dark:to-background/50">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-sm">
            <Badge variant="outline" className="mb-3 flex items-center gap-2 border-primary/50 text-xs uppercase tracking-tight text-primary dark:border-white/30 dark:text-white">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 dark:text-amber-200" />
              Album spotlight
            </Badge>
            <h2 className="text-2xl font-bold text-foreground">
              Aya&apos;s album is in form
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You currently showcase {ownedCards.length} featured cards in your album. 
              Keep building the set to unlock special chemistry bonuses and collector perks.
            </p>
          </div>
          <div className="mx-auto sm:mx-0">
            <PlayerCard
              playerName={featuredCard.name}
              playerNumber={featuredCard.number}
              rarity={featuredCard.rarity}
              imageUrl={featuredCard.image}
              emoji={featuredCard.emoji}
              className="w-[150px]"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {albumStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-foreground/80 backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80"
            >
              <p className="text-[11px] uppercase tracking-wide">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold text-foreground dark:text-white">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground dark:text-white/70">{stat.note}</p>
            </div>
          ))}
        </div>

        {upcomingCards.length > 0 && !showAll && (
          <p className="mt-4 text-xs text-muted-foreground">
            {upcomingCards.length} watchlist {upcomingCards.length === 1 ? "card" : "cards"} ready to reveal once you expand the collection.
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Latest Cards for Your Album
          </h3>
          <p className="text-sm text-muted-foreground">
            Cards below are already in your vault. Expand to preview upcoming drops and wishlist picks.
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
            className="w-full max-w-[200px]"
          />
        ))}
      </div>

      <Button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 w-full rounded-2xl border border-primary/40 bg-primary/90 py-4 text-primary-foreground shadow-sm transition-all hover:shadow-primary/40 dark:bg-gradient-to-r dark:from-primary dark:to-secondary"
      >
        {showAll ? "Show fewer cards" : `Expand to view ${upcomingCards.length} more`}
      </Button>
    </section>
  );
};

export default RecentCollections;
