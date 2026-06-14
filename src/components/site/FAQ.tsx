import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/jewellery-data";

export function FAQ() {
  return (
    <section className="bg-secondary/60 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Everything you need to know about Navaratna Jewellers
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-md border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block rounded-full border border-gold px-7 py-2.5 text-xs uppercase tracking-[0.15em] text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            View Complete FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
