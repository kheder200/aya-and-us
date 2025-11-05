import type { ReactNode } from "react";
import { Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
  playerName: string;
  playerNumber: number;
  rarity: 'common' | 'rare' | 'legendary';
  emoji?: string;
  imageUrl?: string;
  className?: string;
}

const rarityCopy: Record<PlayerCardProps["rarity"], { label: string; gradient: string; border: string; badge: string; accent: string; icon: ReactNode }> = {
  common: {
    label: "Common",
    gradient: "from-pink-400/40 via-rose-300/25 to-pink-500/35 dark:from-pink-500/30 dark:via-rose-400/20 dark:to-pink-600/30",
    border: "border-pink-400/50 dark:border-pink-500/40",
    badge: "border-pink-400/50 bg-pink-50/80 text-pink-800 dark:text-pink-100 dark:bg-pink-900/60",
    accent: "text-pink-600 dark:text-pink-300",
    icon: <Star className="h-3.5 w-3.5" />,
  },
  rare: {
    label: "Rare",
    gradient: "from-pink-500/45 via-purple-400/30 to-rose-500/35 dark:from-pink-600/35 dark:via-purple-500/25 dark:to-rose-600/30",
    border: "border-pink-500/55 dark:border-pink-600/45",
    badge: "border-pink-500/50 bg-pink-100/70 text-pink-900 dark:text-pink-100 dark:bg-pink-900/50",
    accent: "text-pink-700 dark:text-pink-200",
    icon: <Trophy className="h-3.5 w-3.5" />,
  },
  legendary: {
    label: "Legendary",
    gradient: "from-pink-600/50 via-rose-500/35 to-purple-500/40 dark:from-pink-500/40 dark:via-rose-400/30 dark:to-purple-400/35",
    border: "border-pink-600/60 dark:border-pink-500/50",
    badge: "border-pink-600/60 bg-pink-100/80 text-pink-900 dark:text-pink-100 dark:bg-pink-900/60",
    accent: "text-pink-800 dark:text-pink-200",
    icon: <Star className="h-3.5 w-3.5 fill-current" />,
  },
};

const PlayerCard = ({
  playerName,
  playerNumber,
  rarity,
  emoji,
  imageUrl,
  className,
}: PlayerCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white/95 p-3 backdrop-blur-sm shadow-lg shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 dark:bg-gray-900/95 dark:shadow-pink-500/5",
        rarityCopy[rarity].gradient,
        rarityCopy[rarity].border,
        className
      )}
    >
      <div className="absolute left-3 top-3 rounded-full border border-pink-300/40 bg-white/90 px-2 py-1 text-[10px] font-bold text-pink-800 backdrop-blur-sm dark:border-pink-700/30 dark:bg-pink-950/80 dark:text-pink-200 sm:left-4 sm:px-3 sm:text-[11px]">
        {playerNumber.toString().padStart(2, "0")}
      </div>
      <div
        className={cn(
          "absolute right-3 top-3 flex items-center gap-1 rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-wide sm:right-4 sm:text-[10px]",
          rarityCopy[rarity].badge
        )}
      >
        {rarityCopy[rarity].icon}
        {rarityCopy[rarity].label}
      </div>

      <div className="mt-6 sm:mt-8">
        <div className="relative mx-auto flex aspect-[3/4] w-20 items-center justify-center overflow-hidden rounded-xl border border-pink-200/30 bg-white/80 shadow-md shadow-pink-500/10 transition-transform duration-300 group-hover:scale-[1.05] dark:border-pink-800/20 dark:bg-gray-800/80 dark:shadow-pink-500/5 sm:w-24 lg:w-28">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={playerName}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-4xl sm:text-5xl">{emoji}</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>

      <div className="pt-4 text-center text-gray-900 dark:text-white sm:pt-6">
        <p className="text-xs font-bold tracking-wide sm:text-sm lg:text-base">
          {playerName}
        </p>
        <p className={cn("mt-1 text-[10px] uppercase tracking-widest sm:text-[11px]", rarityCopy[rarity].accent)}>
          {rarityCopy[rarity].label} series
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
