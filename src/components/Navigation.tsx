import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-pink-100/20 dark:border-pink-900/20 shadow-lg shadow-pink-500/5">
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600 shadow-xl shadow-pink-500/25 overflow-hidden transition-all duration-300 group-hover:shadow-pink-500/40 group-hover:scale-105">
                <span className="text-3xl animate-girl-ready drop-shadow-sm">🤾‍♀️</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
            </div>
            <div className="text-gray-900 dark:text-white">
              <div className="text-sm font-bold leading-tight uppercase tracking-wider bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Aya & Us
              </div>
              <div className="text-xs font-medium leading-tight text-pink-500/80 dark:text-pink-400/80">
                Catch the magic play!
              </div>
            </div>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="relative w-12 h-12 rounded-xl bg-pink-50/50 dark:bg-pink-950/50 hover:bg-pink-100/70 dark:hover:bg-pink-900/70 border border-pink-200/30 dark:border-pink-800/30 text-pink-700 dark:text-pink-300 hover:text-pink-800 dark:hover:text-pink-200 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105 group"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
    </nav>
  );
};

export default Navigation;
