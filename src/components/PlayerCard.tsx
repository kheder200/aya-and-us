import { Star, Trophy } from "lucide-react";

interface PlayerCardProps {
  playerName: string;
  playerNumber: number;
  rarity: 'common' | 'rare' | 'legendary';
  emoji?: string;
  imageUrl?: string;
}

const PlayerCard = ({ playerName, playerNumber, rarity, emoji, imageUrl }: PlayerCardProps) => {
  const rarityStyles = {
    common: 'from-accent to-success',
    rare: 'from-secondary to-primary',
    legendary: 'from-primary via-accent to-secondary',
  };

  const rarityGlow = {
    common: 'shadow-md',
    rare: 'shadow-purple',
    legendary: 'shadow-glow animate-pulse',
  };

  return (
    <div className={`bg-gradient-to-br ${rarityStyles[rarity]} rounded-2xl p-3 ${rarityGlow[rarity]} transform hover:scale-105 transition-transform`}>
      {/* Player Avatar */}
      <div className="bg-white rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={playerName} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <span className="text-6xl">{emoji}</span>
        )}
      </div>

      {/* Player Name */}
      <p className="text-center font-bold text-white drop-shadow-lg text-sm">
        {playerName}
      </p>
    </div>
  );
};

export default PlayerCard;
