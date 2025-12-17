import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Map, Calendar, Shield, RotateCcw, FolderTree } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Map Your Life",
    description:
      "Auto-generates a Google Earth heatmap of everywhere you've been. Every Snap, every location, plotted on an interactive timeline you can explore for years to come.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Gallery Ready",
    description:
      "Fixes the 'Date Taken' metadata so your photos actually sort correctly in Apple Photos, Google Photos, or any gallery app. No more jumbled timelines.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Privacy Focused",
    description:
      "Your data never leaves your computer. We process everything locally for maximum security. No cloud uploads, no accounts, no tracking.",
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-primary" />,
    title: "Never Lose Progress",
    description:
      "Internet dropped? Computer crashed? No problem. Pick up exactly where you left off. Every download is tracked and resumable.",
  },
  {
    icon: <FolderTree className="w-8 h-8 text-primary" />,
    title: "Perfectly Organized",
    description:
      "Files are automatically sorted into folders by date: 2023/January/15/. Find any memory in seconds, even years from now.",
  },
];

const featureList: string[] = [
  "EXIF Geotagging",
  "Google Earth Export",
  "Resume Support",
  "Parallel Downloads",
  "Cross-Platform",
  "Zero Dependencies",
  "Open Source CLI",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Everything You Need to{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Save Your Memories
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                {icon}
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
