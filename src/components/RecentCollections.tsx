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
      {/* Mobile-first hero section */}
      <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100/80 p-6 shadow-xl shadow-pink-500/10 backdrop-blur-xl dark:from-pink-950/50 dark:via-rose-950/30 dark:to-pink-900/40 border border-pink-200/30 dark:border-pink-800/20">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <Badge variant="outline" className="mb-4 inline-flex items-center gap-2 rounded-full border-pink-300/50 bg-pink-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-700 backdrop-blur-sm dark:border-pink-700/30 dark:bg-pink-900/50 dark:text-pink-300">
              <Sparkles className="h-3.5 w-3.5 text-pink-500" />
              Album Spotlight
            </Badge>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Aya&apos;s album is in form
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-pink-700/80 dark:text-pink-300/80 sm:text-base">
              You currently showcase {ownedCards.length} featured cards in your album.
              Keep building the set to unlock special chemistry bonuses and collector perks.
            </p>
          </div>

          {/* Featured card - centered on mobile, right-aligned on desktop */}
          <div className="mx-auto lg:mx-0">
            <PlayerCard
              playerName={featuredCard.name}
              playerNumber={featuredCard.number}
              rarity={featuredCard.rarity}
              imageUrl={featuredCard.image}
              emoji={featuredCard.emoji}
              className="w-[140px] sm:w-[160px]"
            />
          </div>
        </div>

        {/* Album stats - responsive grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {albumStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-pink-200/40 bg-white/60 p-4 backdrop-blur-sm shadow-sm shadow-pink-500/5 dark:border-pink-800/30 dark:bg-pink-950/40 dark:shadow-pink-500/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-pink-600/70 dark:text-pink-400/70">
                {stat.label}
              </p>
              <p className="mt-1 text-lg font-bold text-pink-900 dark:text-pink-100 sm:text-xl">
                {stat.value}
              </p>
              <p className="text-xs text-pink-700/60 dark:text-pink-300/60">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Upcoming cards hint */}
        {upcomingCards.length > 0 && !showAll && (
          <div className="mt-4 rounded-xl bg-pink-100/50 p-3 dark:bg-pink-900/30">
            <p className="text-xs text-pink-700 dark:text-pink-300">
              {upcomingCards.length} watchlist {upcomingCards.length === 1 ? "card" : "cards"} ready to reveal once you expand the collection.
            </p>
          </div>
        )}
      </div>

      {/* Cards section header - mobile optimized */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            Latest Cards for Your Album
          </h3>
          <p className="mt-1 text-sm text-pink-700/70 dark:text-pink-300/70">
            Cards below are already in your vault. Expand to preview upcoming drops and wishlist picks.
          </p>
        </div>
        <Button
          variant="ghost"
          className="inline-flex h-10 items-center gap-2 self-start rounded-full border border-pink-300/40 bg-pink-50/50 px-4 text-sm font-medium text-pink-700 hover:bg-pink-100/70 hover:text-pink-800 dark:border-pink-700/30 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-800/40 dark:hover:text-pink-200"
        >
          View album
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Cards grid - mobile-first responsive */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {displayedCards.map((card, index) => (
          <PlayerCard
            key={`${card.name}-${index}`}
            playerName={card.name}
            playerNumber={card.number}
            rarity={card.rarity}
            imageUrl={card.image}
            emoji={card.emoji}
            className="w-full"
          />
        ))}
      </div>

      {/* Expand button - mobile optimized */}
      <Button
        onClick={() => setShowAll(!showAll)}
        className="w-full rounded-2xl border border-pink-300/50 bg-gradient-to-r from-pink-500 to-rose-500 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-pink-500/40 hover:shadow-xl dark:border-pink-700/30 dark:from-pink-600 dark:to-rose-600"
      >
        {showAll ? "Show fewer cards" : `Expand to view ${upcomingCards.length} more`}
      </Button>
    </section>
  );
};

export default RecentCollections;
