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

      <footer className="max-w-md mx-auto px-4 py-12">
        <div className="rounded-3xl border border-gradient-to-r from-pink-300/30 to-purple-300/30 dark:border-pink-800/30 dark:to-purple-800/30 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-blue-50/40 dark:from-pink-950/30 dark:via-purple-950/20 dark:to-blue-950/20 p-6 backdrop-blur-md text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">⚽</span>
            <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-400">
              Aya & Us
            </p>
            <span className="text-2xl">🤾‍♀️</span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-pink-300/40 to-transparent dark:via-pink-700/30"></div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Designed & built by
            </p>
            <p className="text-sm font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-400">
              Kheder Hassoun
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-pink-300/40 to-transparent dark:via-pink-700/30"></div>

          <div className="flex items-center justify-center gap-1 text-xs text-gray-700 dark:text-gray-300 flex-wrap">
            <span>🛠️</span>
            <span className="font-medium">WIP</span>
            <span>•</span>
            <span>🎯</span>
            <span>Mock data</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
