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
    gradient: "from-sky-500/45 via-emerald-500/20 to-blue-600/35 dark:from-sky-400/30 dark:via-emerald-400/20 dark:to-blue-500/30",
    border: "border-sky-500/40 dark:border-sky-400/25",
    badge: "border-sky-500/40 bg-sky-500/15 text-sky-900 dark:text-sky-100 dark:bg-sky-500/20",
    accent: "text-sky-600 dark:text-sky-100",
    icon: <Star className="h-3.5 w-3.5" />,
  },
  rare: {
    label: "Rare",
    gradient: "from-purple-500/45 via-fuchsia-500/25 to-indigo-500/35 dark:from-purple-500/25 dark:via-fuchsia-500/20 dark:to-sky-500/20",
    border: "border-purple-500/45 dark:border-purple-400/30",
    badge: "border-purple-500/40 bg-purple-500/15 text-purple-900 dark:text-purple-100 dark:bg-purple-500/20",
    accent: "text-purple-600 dark:text-purple-100",
    icon: <Trophy className="h-3.5 w-3.5" />,
  },
  legendary: {
    label: "Legendary",
    gradient: "from-amber-500/50 via-rose-500/25 to-violet-500/35 dark:from-amber-400/30 dark:via-rose-400/20 dark:to-purple-500/25",
    border: "border-amber-500/55 dark:border-amber-400/40",
    badge: "border-amber-500/60 bg-amber-500/20 text-amber-900 dark:text-amber-100 dark:bg-amber-500/25",
    accent: "text-amber-600 dark:text-amber-100",
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
        "group relative overflow-hidden rounded-3xl border bg-white/90 p-3 backdrop-blur transition-transform duration-300 hover:-translate-y-1 dark:bg-gradient-to-br",
        rarityCopy[rarity].gradient,
        rarityCopy[rarity].border,
        className
      )}
    >
      <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-white/85 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
        {playerNumber.toString().padStart(2, "0")}
      </div>
      <div
        className={cn(
          "absolute right-4 top-4 flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
          rarityCopy[rarity].badge
        )}
      >
        {rarityCopy[rarity].icon}
        {rarityCopy[rarity].label}
      </div>

      <div className="mt-8">
        <div className="relative mx-auto flex aspect-[3/4] w-24 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-lg shadow-black/15 transition-transform duration-300 group-hover:scale-[1.04] dark:border-white/15 dark:bg-white/10 dark:shadow-black/30 sm:w-28">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={playerName}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-5xl">{emoji}</span>
          )}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-white" />
        </div>
      </div>

      <div className="pt-6 text-center text-foreground dark:text-white">
        <p className="text-sm font-bold tracking-wide sm:text-base">
          {playerName}
        </p>
        <p className={cn("mt-1 text-[11px] uppercase tracking-widest", rarityCopy[rarity].accent)}>
          {rarityCopy[rarity].label} series
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
