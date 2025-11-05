import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MatchPredictionCard from "@/components/MatchPredictionCard";
import PredictionHistorySection from "@/components/PredictionHistorySection";
import RecentCollections from "@/components/RecentCollections";
import GameReadsSection from "@/components/GameReadsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="max-w-md mx-auto pb-8">
        <HeroSection />
        
        <div className="px-4 mb-6">
          <MatchPredictionCard />
        </div>


        <RecentCollections />

        <GameReadsSection />
        <PredictionHistorySection />
      </main>

      {/* Decorative Elements - Football themed */}
      <div className="fixed top-20 right-4 text-4xl opacity-25">⚽</div>
     {/* <div className="fixed bottom-32 left-4 text-3xl opacity-25">🥅</div>*/}

      <div className="fixed bottom-1/4 right-4 text-3xl opacity-25">🏆</div>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          Website designed and developed by <span className="font-semibold text-primary">Kheder Hassoun</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Currently in development phase - All data are mock
        </p>
      </footer>
    </div>
  );
};

export default Index;
