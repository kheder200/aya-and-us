import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { toast } from "sonner";

const MatchPredictionCard = () => {
  const [homeScore, setHomeScore] = useState<number | null>(null);
  const [awayScore, setAwayScore] = useState<number | null>(null);

  const scoreOptions = [0, 1, 2, 3, 4, 5];

  const handleSubmit = () => {
    if (homeScore === null || awayScore === null) {
      toast.error("Please select both scores!");
      return;
    }
    toast.success(`Prediction submitted: ${homeScore} - ${awayScore}! ⚽`);
  };

  return (
    <div className="bg-gradient-card rounded-3xl p-6 shadow-pink border-2 border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground">
          Today's Match
        </h2>
        <div className="flex items-center gap-1 text-sm text-muted-foreground bg-white px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span className="font-medium">3h 24m</span>
        </div>
      </div>

      {/* Teams */}
      <div className="grid grid-cols-3 gap-4 items-center mb-6">
        {/* Home Team */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-purple">
            ⚽
          </div>
          <p className="font-bold text-sm text-foreground">Barcelona</p>
        </div>

        {/* VS */}
        <div className="text-center">
          <span className="text-2xl font-extrabold text-secondary">VS</span>
        </div>

        {/* Away Team */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-2xl shadow-purple">
            ⚽
          </div>
          <p className="font-bold text-sm text-foreground">Real Madrid</p>
        </div>
      </div>

      {/* Score Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Home Score */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">
            Barcelona Score
          </label>
          <div className="grid grid-cols-3 gap-2">
            {scoreOptions.map((score) => (
              <button
                key={`home-${score}`}
                onClick={() => setHomeScore(score)}
                className={`py-3 rounded-xl font-bold transition-all ${
                  homeScore === score
                    ? 'bg-gradient-primary text-primary-foreground shadow-pink scale-105'
                    : 'bg-white text-foreground hover:shadow-md border border-transparent dark:bg-card dark:text-[#7d4bff] dark:border-[#7d4bff]/50'
                }`}
              >
                {score}
              </button>
            ))}
          </div>
        </div>

        {/* Away Score */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">
            Madrid Score
          </label>
          <div className="grid grid-cols-3 gap-2">
            {scoreOptions.map((score) => (
              <button
                key={`away-${score}`}
                onClick={() => setAwayScore(score)}
                className={`py-3 rounded-xl font-bold transition-all ${
                  awayScore === score
                    ? 'bg-gradient-primary text-primary-foreground shadow-pink scale-105'
                    : 'bg-white text-foreground hover:shadow-md border border-transparent dark:bg-card dark:text-[#7d4bff] dark:border-[#7d4bff]/50'
                }`}
              >
                {score}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button 
        onClick={handleSubmit}
        className="w-full bg-gradient-primary text-primary-foreground font-bold py-6 rounded-2xl shadow-purple hover:shadow-glow transition-all hover:scale-105"
      >
        Submit My Prediction!
      </Button>

      {/* Reward Info */}
      <p className="text-center text-sm text-muted-foreground mt-3">
        Win a new card to your album! 🎴
      </p>
    </div>
  );
};

export default MatchPredictionCard;
