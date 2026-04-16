import {
  ShieldVerifiedIcon,
  TrustCheckIcon,
  ModalityIcon,
} from "@/components/icons/CustomIcons";

const BADGES = [
  { Icon: TrustCheckIcon, label: "0% עמלה. אף פעם." },
  { Icon: ShieldVerifiedIcon, label: "מורים עם תעודת זהות מאומתת" },
  { Icon: ModalityIcon, label: "אונליין · אצל המורה · אצלכם" },
  { Icon: TrustCheckIcon, label: "עברית מלאה · RTL" },
];

export default function TrustBarSection() {
  return (
    <section className="w-full bg-white border-y border-dark-100 px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {BADGES.map(({ Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 text-sm font-medium text-dark-700"
          >
            <Icon className="h-5 w-5 text-brand-500" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
