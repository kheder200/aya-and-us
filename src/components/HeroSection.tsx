const HeroSection = () => {
  return (
    <div className="text-center py-8 px-4">
      <h1 className="text-3xl font-extrabold text-foreground mb-3 flex items-center justify-center gap-3">
        <span className="inline-block text-4xl animate-rotate-hero drop-shadow-lg">⚽</span>
        Predict Today's Matches!
      </h1>
      <p className="text-muted-foreground font-medium">
        Make your predictions & collect exclusive player cards! ⚽
      </p>
    </div>
  );
};

export default HeroSection;
