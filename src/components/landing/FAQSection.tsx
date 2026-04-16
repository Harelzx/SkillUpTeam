import ScrollReveal from "@/components/animations/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/structured-data";

export default function FAQSection() {
  return (
    <section id="faq" className="w-full bg-white px-6 py-16 md:py-24 md:px-16">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="mb-2 text-center text-xs font-medium text-dark-400">
            עודכן לאחרונה: אפריל 2026
          </p>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-dark-900 md:text-4xl">
            שאלות נפוצות
          </h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <details className="group rounded-xl border border-dark-200 bg-dark-50 p-5 transition-colors open:border-brand-400 open:bg-white">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-bold text-dark-900 md:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="shrink-0 text-brand-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-dark-600 md:text-base">
                  {item.a}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
