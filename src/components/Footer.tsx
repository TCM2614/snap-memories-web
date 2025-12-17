import { Camera } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2"
          >
            <Camera className="w-6 h-6 text-primary" />
            Snap Memories
          </a>
          <p className="text-muted-foreground mt-2">
            Your memories deserve permanence.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Product</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Downloads</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              macOS
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Windows
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Linux
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/snap-memories-backup/cli"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Documentation
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:support@snapmemoriesbackup.com"
              className="opacity-60 hover:opacity-100"
            >
              Support
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="text-muted-foreground">
          Made with ❤️ for people who care about their memories.
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          © 2024 Snap Memories Backup. Not affiliated with Snap Inc.
        </p>
      </section>
    </footer>
  );
};
