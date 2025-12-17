import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex justify-center items-center">
      {/* Pricing Card */}
      <Card className="w-80 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Try it now
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> forever</span>
          </div>

          <CardDescription>
            Download up to 250 memories with full metadata recovery.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a href="#pricing">
            <Button className="w-full">Get Started Free</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Up to 250 Memories", "Date & Time Recovery", "100% Offline"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
