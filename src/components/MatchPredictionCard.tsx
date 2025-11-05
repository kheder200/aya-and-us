import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit3, Lock } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Mode = "select" | "review";

const scoreOptions = [0, 1, 2, 3, 4, 5];

const communitySplit = [
  { label: "Barcelona win", value: 68, tone: "bg-green-400" },
  { label: "Draw", value: 20, tone: "bg-amber-400" },
  { label: "Madrid win", value: 12, tone: "bg-blue-400" },
];

const MatchPredictionCard = () => {
  const [mode, setMode] = useState<Mode>("select");
  const [prediction, setPrediction] = useState<{ home: number | null; away: number | null }>({
    home: null,
    away: null,
  });
  const [lockedPrediction, setLockedPrediction] = useState<{ home: number; away: number } | null>(null);

  const canSubmit = prediction.home !== null && prediction.away !== null;

  const accuracyCopy = useMemo(() => {
    if (!lockedPrediction) {
      return "Select your scoreline to lock in Aya's call.";
    }
    if (lockedPrediction.home > lockedPrediction.away) {
      return "Aya expects Barcelona to edge the match with confident attacking play.";
    }
    if (lockedPrediction.home === lockedPrediction.away) {
      return "Balanced battle ahead — Aya sees a tight scoreline.";
    }
    return "Aya is backing Madrid to surprise with a clinical finish.";
  }, [lockedPrediction]);

  const handleScoreSelect = (team: "home" | "away", score: number) => {
    setPrediction((prev) => ({
      ...prev,
      [team]: prev[team] === score ? null : score,
    }));
  };

  const handleSubmit = () => {
    if (!canSubmit || prediction.home === null || prediction.away === null) {
      toast.error("Pick both scores to lock your prediction.");
      return;
    }
    const nextPrediction = { home: prediction.home, away: prediction.away };
    setLockedPrediction(nextPrediction);
    setMode("review");
    toast.success(`Prediction locked: ${nextPrediction.home} - ${nextPrediction.away}`);
  };

  const handleEdit = () => {
    setMode("select");
    toast("Update your scoreline before kickoff.");
  };

  const handleClear = () => {
    setPrediction({ home: null, away: null });
    setLockedPrediction(null);
    setMode("select");
  };

  return (
    <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-background to-background/40 p-6 shadow-pink">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-foreground">Today&apos;s Match</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Lock your scoreline before kickoff.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-background/60 px-3 py-1 text-sm text-muted-foreground shadow-sm backdrop-blur">
          <Clock className="h-4 w-4" />
          <span className="font-medium">3h 24m</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 items-center gap-4 rounded-2xl border border-white/10 bg-background/60 p-4 shadow-inner">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl shadow-purple">
            ⚽
          </div>
          <p className="text-sm font-semibold text-foreground">Barcelona</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <Badge variant="outline" className="border-primary/40 text-[11px] uppercase tracking-wide">
            La Liga
          </Badge>
          <span className="text-3xl font-black text-secondary">VS</span>
          <p className="text-[11px] uppercase text-muted-foreground">Camp Nou</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-2xl shadow-purple">
            ⚽
          </div>
          <p className="text-sm font-semibold text-foreground">Real Madrid</p>
        </div>
      </div>

      {mode === "select" ? (
        <>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Choose scores
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(["home", "away"] as const).map((teamKey) => {
                  const teamLabel = teamKey === "home" ? "Barcelona" : "Madrid";
                  const selectedScore = prediction[teamKey];
                  return (
                    <div key={teamKey} className="rounded-2xl border border-white/10 bg-background/70 p-4 shadow-inner">
                      <p className="text-sm font-semibold text-foreground mb-3">
                        {teamLabel} score
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {scoreOptions.map((score) => {
                          const isSelected = selectedScore === score;
                          return (
                            <button
                              key={`${teamKey}-${score}`}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() => handleScoreSelect(teamKey, score)}
                              className={cn(
                                "rounded-xl border px-3 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                                isSelected
                                  ? "border-transparent bg-gradient-primary text-primary-foreground shadow-pink"
                                  : "border-border/60 bg-card/70 text-foreground hover:border-primary/40 hover:-translate-y-0.5"
                              )}
                            >
                              {score}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                Community picks
              </p>
              <div className="space-y-3">
                {communitySplit.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.label}</span>
                      <span className="font-semibold text-foreground">{item.value}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-border/60">
                      <div
                        className={cn("h-2 rounded-full transition-all", item.tone)}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="mt-6 w-full rounded-2xl bg-gradient-primary py-5 text-lg font-semibold text-primary-foreground shadow-purple transition-all hover:shadow-glow disabled:opacity-50 disabled:hover:shadow-none"
          >
            Lock My Prediction
          </Button>
        </>
      ) : (
        lockedPrediction && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Prediction locked in
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  You can update it until kickoff.
                </p>
              </div>
              <Badge className="gap-1 bg-primary text-primary-foreground">
                <Lock className="h-3.5 w-3.5" />
                Saved
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-4 text-center">
                <p className="text-xs uppercase text-muted-foreground font-semibold">
                  Barcelona
                </p>
                <p className="text-4xl font-black text-foreground">
                  {lockedPrediction.home}
                </p>
              </div>
              <div className="rounded-2xl border border-blue-400/30 bg-blue-400/10 p-4 text-center">
                <p className="text-xs uppercase text-muted-foreground font-semibold">
                  Madrid
                </p>
                <p className="text-4xl font-black text-foreground">
                  {lockedPrediction.away}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                Aya&apos;s insight
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {accuracyCopy}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                <div className="rounded-xl border border-white/10 bg-background/40 px-2 py-2">
                  <p className="font-semibold text-foreground">82%</p>
                  <p>Overall accuracy</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-background/40 px-2 py-2">
                  <p className="font-semibold text-foreground">68%</p>
                  <p>Home win picks</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-background/40 px-2 py-2">
                  <p className="font-semibold text-foreground">14%</p>
                  <p>Late swings</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button
                variant="secondary"
                onClick={handleEdit}
                className="w-full gap-2 rounded-2xl bg-secondary text-secondary-foreground"
              >
                <Edit3 className="h-4 w-4" />
                Edit prediction
              </Button>
              <Button
                variant="ghost"
                onClick={handleClear}
                className="w-full rounded-2xl border border-transparent text-muted-foreground hover:border-border"
              >
                Clear selection
              </Button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MatchPredictionCard;
