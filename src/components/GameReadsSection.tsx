import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flame, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import articleThumb1 from "@/assets/article-thumb-1.png";
import articleThumb2 from "@/assets/article-thumb-2.png";

const GameReadsSection = () => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles: Array<{
    id: number;
    headline: string;
    preview: string;
    fullText: string;
    thumbnail: string;
    icon: LucideIcon;
    iconColor: string;
    accentColor: string;
  }> = [
    {
      id: 1,
      headline: "Why Team Barcelona will Dominate!",
      preview: "Aya breaks down the defensive strategies for tonight's big game...",
      fullText: "Aya breaks down the defensive strategies for tonight's big game. Barcelona's formation allows them to control the midfield with precision passing and quick transitions. Their defensive line has been incredibly solid this season, with key players showing excellent positioning and communication. The team's ability to press high and recover the ball quickly gives them a significant advantage. With their star striker in top form and the midfield creating countless opportunities, Barcelona is set to dominate this match.",
      thumbnail: articleThumb1,
      icon: Flame,
      iconColor: "text-orange-300",
      accentColor: "bg-orange-500/15",
    },
    {
      id: 2,
      headline: "Midfield Battle: The Key to Victory",
      preview: "Discover the tactical moves that could decide the match outcome...",
      fullText: "Discover the tactical moves that could decide the match outcome. The midfield battle will be crucial in determining who takes control of the game. Both teams have exceptional playmakers who can dictate the tempo and create scoring opportunities. Watch for the defensive midfielders who will need to break up attacks and start counter-plays. The team that wins the midfield battle will likely dominate possession and create more chances. Expect to see intense duels, clever positioning, and strategic substitutions as coaches try to gain the upper hand in this critical area of the pitch.",
      thumbnail: articleThumb2,
      icon: Target,
      iconColor: "text-sky-300",
      accentColor: "bg-sky-500/15",
    },
  ];

  const toggleArticle = (id: number) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-start mb-4">
        <h2 className="text-xl font-bold text-foreground">
          Aya's Game Reads
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {articles.map((article) => {
          const Icon = article.icon;
          return (
            <div
              key={article.id}
              className="bg-card rounded-2xl p-4 shadow-pink hover:shadow-purple transition-shadow"
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={article.thumbnail}
                    alt={article.headline}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${article.accentColor}`}>
                      <Icon className={`w-5 h-5 ${article.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Aya's insight
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">
                    {article.headline}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {expandedArticle === article.id ? article.fullText : article.preview}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => toggleArticle(article.id)}
                    className="text-primary font-semibold text-xs p-0 h-auto hover:bg-transparent"
                  >
                    {expandedArticle === article.id ? "Show Less ←" : "Read More →"}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameReadsSection;
