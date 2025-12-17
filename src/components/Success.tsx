import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Mail, Download, Key } from "lucide-react";

// TODO: Update with actual download link
const DOWNLOAD_LINK = "#";

export const Success = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 dark:bg-green-900 p-6">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Thank You for Your Purchase! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Your Pro license has been activated successfully.
          </p>
        </div>

        {/* License Key Card */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              Check Your Email for Your License Key
            </CardTitle>
            <CardDescription>
              Lemon Squeezy has sent your license key to your email address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <span>Look for an email from <strong>Lemon Squeezy</strong></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Can't find it? Check your spam folder or contact us at{" "}
              <a 
                href="mailto:support@snapmemoriesbackup.com" 
                className="text-primary hover:underline"
              >
                support@snapmemoriesbackup.com
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Next Steps</h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h3 className="font-semibold mb-1">Download the App</h3>
              <p className="text-sm text-muted-foreground">
                Get the desktop app for your platform
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h3 className="font-semibold mb-1">Enter Your License</h3>
              <p className="text-sm text-muted-foreground">
                Use the key from your email
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h3 className="font-semibold mb-1">Backup Your Memories</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy unlimited downloads!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <a href={DOWNLOAD_LINK}>
            <Button size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Snap Memories Pro
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground">
            Available for macOS, Windows, and Linux
          </p>
        </div>

        {/* Back to home */}
        <div>
          <a href="/" className="text-primary hover:underline">
            ← Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};
