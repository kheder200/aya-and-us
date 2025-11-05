import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-primary shadow-purple px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-glow overflow-hidden">
              <span className="text-2xl animate-girl-ready">🤾‍♀️</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
          </div>
          <div className="text-primary-foreground">
            <div className="text-xs font-bold leading-none uppercase tracking-wide">
              Aya  and us [app]
            </div>
            <div className="text-xs font-medium leading-none">Catch the magic play!</div>
          </div>
        </div>

        {/* Nav Icons */}
        <div className="flex items-center gap-1">
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative text-primary-foreground hover:bg-white/10 rounded-full w-10 h-10 overflow-hidden bg-white/15 backdrop-blur border border-white/40 dark:border-white/20"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/40 dark:border-white/25 animate-theme-pulse"
            />
            {theme === "dark" ? <Sun className="w-5 h-5 relative z-10" /> : <Moon className="w-5 h-5 relative z-10" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
