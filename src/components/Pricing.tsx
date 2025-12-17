import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

// Lemon Squeezy checkout URL
const BUY_URL = "https://snapmemoriesbackup.lemonsqueezy.com/buy/543cc34b-b15d-49e3-92df-94d28d401fb0";
const DOWNLOAD_FREE_LINK = "#";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  priceLabel: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  benefitList: { text: string; included: boolean; highlight?: boolean }[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    priceLabel: "forever",
    description: "Try the app with limited features. No credit card required.",
    buttonText: "Download Free",
    buttonHref: DOWNLOAD_FREE_LINK,
    benefitList: [
      { text: "Capped at 250 Memories", included: true, highlight: true },
      { text: "Resume support", included: true },
      { text: "Organized folders (YYYY/MM/DD)", included: true },
      { text: "Basic download reports", included: true },
      { text: "Unlimited downloads", included: false },
      { text: "EXIF geotagging", included: false },
      { text: "Interactive Map export", included: false },
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 12,
    priceLabel: "one-time",
    description: "Full-featured desktop app. Pay once, own forever.",
    buttonText: "Buy Pro — $12",
    buttonHref: BUY_URL,
    benefitList: [
      { text: "Unlimited Downloads", included: true, highlight: true },
      { text: "Beautiful GUI — no terminal needed", included: true },
      { text: "One-Click EXIF Geo-tagging", included: true },
      { text: "Interactive Map (Google Earth)", included: true, highlight: true },
      { text: "Fixed photo dates (EXIF)", included: true },
      { text: "Instant License Key Delivery", included: true },
      { text: "Priority email support", included: true },
      { text: "Lifetime updates", included: true },
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Simple Pricing.
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          No Subscriptions.
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Pay once, own forever. Your memories deserve permanence.
      </h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Recommended
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> {pricing.priceLabel}</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a 
                href={pricing.buttonHref}
                target={pricing.popular === PopularPlanType.YES ? "_blank" : undefined}
                rel={pricing.popular === PopularPlanType.YES ? "noopener noreferrer" : undefined}
              >
                <Button 
                  className="w-full" 
                  variant={pricing.popular === PopularPlanType.YES ? "default" : "outline"}
                >
                  {pricing.buttonText}
                </Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit) => (
                  <span
                    key={benefit.text}
                    className="flex"
                  >
                    {benefit.included ? (
                      <Check className={benefit.highlight ? "text-primary" : "text-green-500"} />
                    ) : (
                      <X className="text-muted-foreground" />
                    )}
                    <h3 className={`ml-2 ${
                      !benefit.included 
                        ? 'text-muted-foreground' 
                        : benefit.highlight 
                          ? 'font-semibold' 
                          : ''
                    }`}>
                      {benefit.text}
                    </h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
