import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Ready to
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Rescue Your Memories?{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Your Snapchat export expires in 72 hours. Don't let years of memories disappear.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a href="#pricing">
            <Button className="w-full md:mr-4 md:w-auto">
              Get Pro — $12
            </Button>
          </a>
          <a href="https://github.com/snap-memories-backup/cli/releases" target="_blank" rel="noreferrer noopener">
            <Button
              variant="outline"
              className="w-full md:w-auto"
            >
              Download Free CLI
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
