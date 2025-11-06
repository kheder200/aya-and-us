import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/40 dark:bg-gray-950/40 border-b border-pink-200/30 dark:border-pink-900/30">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🤾‍♀️</span>
          <div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">Aya & Us</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Card Collection</div>
          </div>
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-lg hover:bg-pink-100/50 dark:hover:bg-pink-950/50 animate-theme-pulse"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
