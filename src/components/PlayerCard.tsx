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
    gradient: "from-sky-400/20 via-emerald-400/10 to-blue-500/20",
    border: "border-sky-400/30",
    badge: "border-sky-400/40 bg-sky-500/10 text-sky-100",
    accent: "text-sky-100",
    icon: <Star className="h-3.5 w-3.5" />,
  },
  rare: {
    label: "Rare",
    gradient: "from-purple-500/25 via-fuchsia-500/15 to-sky-500/20",
    border: "border-purple-400/40",
    badge: "border-purple-400/40 bg-purple-500/15 text-purple-100",
    accent: "text-purple-100",
    icon: <Trophy className="h-3.5 w-3.5" />,
  },
  legendary: {
    label: "Legendary",
    gradient: "from-amber-400/30 via-rose-400/20 to-purple-500/25",
    border: "border-amber-400/50",
    badge: "border-amber-400/60 bg-amber-500/20 text-amber-100",
    accent: "text-amber-100",
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
        "group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-4 backdrop-blur transition-transform duration-300 hover:-translate-y-1",
        rarityCopy[rarity].gradient,
        rarityCopy[rarity].border,
        className
      )}
    >
      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
        #{playerNumber.toString().padStart(2, "0")}
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
        <div className="relative mx-auto flex aspect-[3/4] w-32 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-black/30 group-hover:scale-[1.03] transition-transform">
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

      <div className="pt-6 text-center text-white">
        <p className="text-base font-bold tracking-wide drop-shadow-md">
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
