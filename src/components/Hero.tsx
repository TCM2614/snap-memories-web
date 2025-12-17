import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Download } from "lucide-react";

// Direct download from our domain
const DOWNLOAD_LINK = "/setup.exe";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Your{" "}
            <span className="inline bg-gradient-to-r from-[#FFFC00] to-[#FFD700] text-transparent bg-clip-text">
              Snapchat Memories.
            </span>
          </h1>
          <h2 className="inline">
            {" "}On Your Device.{" "}
            <span className="inline bg-gradient-to-r from-[#FFFC00] to-[#FFD700] text-transparent bg-clip-text">
              Forever.
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The only tool that recovers your lost location data and fixes your photo dates automatically.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#pricing"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Get Started
          </a>

          <a
            rel="noreferrer noopener"
            href={DOWNLOAD_LINK}
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Download Free App
            <Download className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
