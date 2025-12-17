import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. The app runs entirely on your computer. Your photos and location data never leave your machine. We don't have servers that could even receive your data if we wanted to.",
    value: "item-1",
  },
  {
    question: "How do I get my Snapchat export?",
    answer:
      "Go to accounts.snapchat.com, log in, navigate to 'My Data,' and request your data. Snapchat will email you a download link within 24 hours. Download the ZIP and open it with Snap Memories Backup.",
    value: "item-2",
  },
  {
    question: "My download links expired. What do I do?",
    answer:
      "Snapchat links expire after about 72 hours. You'll need to request a new export from Snapchat. The app will detect expired links and warn you before wasting time.",
    value: "item-3",
  },
  {
    question: "Does it work on Mac/Windows/Linux?",
    answer:
      "Yes! We have native apps for macOS (Intel and Apple Silicon), Windows 10/11, and Linux (AppImage, .deb).",
    value: "item-4",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "The free CLI tool downloads and organizes your photos. The Pro app adds a visual interface (no terminal required), automatic GPS embedding into your photos, and exports a Google Earth map file of all your locations.",
    value: "item-5",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, within 14 days if the app doesn't work for your use case. Just email us.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:support@snapmemoriesbackup.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
