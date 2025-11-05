import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type MatchOutcome = "win" | "loss" | "pending";

type HistoryItem = {
  id: number;
  opponent: string;
  competition: string;
  kickoff: string;
  predictedScore: [number, number];
  actualScore?: [number, number];
  outcome: MatchOutcome;
  highlight: string;
};

const historyData: HistoryItem[] = [
  {
    id: 1,
    opponent: "Manchester City",
    competition: "Champions League - Semi",
    kickoff: "Apr 18, 2024",
    predictedScore: [2, 1],
    actualScore: [2, 1],
    outcome: "win",
    highlight: "Aya nailed the late comeback call.",
  },
  {
    id: 2,
    opponent: "Atletico Madrid",
    competition: "La Liga - Matchday 31",
    kickoff: "Apr 7, 2024",
    predictedScore: [1, 0],
    actualScore: [1, 2],
    outcome: "loss",
    highlight: "Defensive injuries flipped the result.",
  },
  {
    id: 3,
    opponent: "Sevilla",
    competition: "La Liga - Matchday 30",
    kickoff: "Mar 31, 2024",
    predictedScore: [3, 1],
    actualScore: [3, 1],
    outcome: "win",
    highlight: "Pressing advantage delivered goals in both halves.",
  },
  {
    id: 4,
    opponent: "Real Betis",
    competition: "Copa del Rey - QF",
    kickoff: "Mar 20, 2024",
    predictedScore: [2, 2],
    actualScore: undefined,
    outcome: "pending",
    highlight: "Prediction submitted — awaiting full-time whistle.",
  },
];

const statusCopy: Record<MatchOutcome, { label: string; badgeVariant: "default" | "secondary" | "outline"; tone: string }> =
  {
    win: { label: "Perfect call", badgeVariant: "default", tone: "text-green-300" },
    loss: { label: "Upset", badgeVariant: "secondary", tone: "text-pink-300" },
    pending: { label: "In progress", badgeVariant: "outline", tone: "text-sky-300" },
  };

const PredictionHistorySection = () => {
  const sortedHistory = useMemo(
    () => historyData.slice().sort((a, b) => b.id - a.id),
    []
  );

  return (
    <section className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Prediction History
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Track Aya&apos;s calls versus final scores as matches wrap up.
          </p>
        </div>
        <Badge variant="outline" className="hidden sm:inline-flex">
          Last {sortedHistory.length} matches
        </Badge>
      </div>

      <div className="space-y-3">
        {sortedHistory.map((item) => {
          const status = statusCopy[item.outcome];
          return (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm px-4 py-4 shadow-sm transition-shadow hover:shadow-purple"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Barcelona vs {item.opponent}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">
                    {item.competition} • {item.kickoff}
                  </p>
                </div>
                <Badge variant={status.badgeVariant} className={cn("text-[11px] uppercase tracking-wide", status.tone)}>
                  {status.label}
                </Badge>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-background/40 px-3 py-2">
                  <p className="text-[11px] uppercase text-muted-foreground font-semibold">
                    Predicted
                  </p>
                  <p className="text-foreground font-bold">
                    {item.predictedScore[0]} - {item.predictedScore[1]}
                  </p>
                </div>

                <div className="rounded-xl bg-background/40 px-3 py-2">
                  <p className="text-[11px] uppercase text-muted-foreground font-semibold">
                    Final
                  </p>
                  <p className="text-foreground font-bold">
                    {item.actualScore ? `${item.actualScore[0]} - ${item.actualScore[1]}` : "Waiting"}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                {item.highlight}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PredictionHistorySection;
