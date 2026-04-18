import { useLanguage, type Language } from "@/lib/i18n";

const BrazilFlag = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={Math.round(size * 0.7)}
    viewBox="0 0 28 20"
    aria-hidden="true"
    className="block"
  >
    <rect width="28" height="20" fill="#009B3A" />
    <polygon points="14,2 26,10 14,18 2,10" fill="#FEDF00" />
    <circle cx="14" cy="10" r="4" fill="#002776" />
    <path
      d="M10.5 10.3 A5 5 0 0 1 17.5 9.6"
      stroke="#FFFFFF"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

const USAFlag = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={Math.round(size * 0.7)}
    viewBox="0 0 28 20"
    aria-hidden="true"
    className="block"
  >
    <rect width="28" height="20" fill="#B22234" />
    {[1, 3, 5, 7, 9, 11, 13].map((i) => (
      <rect key={i} y={i * (20 / 13)} width="28" height={20 / 13} fill="#FFFFFF" />
    ))}
    <rect width="11" height="10.77" fill="#3C3B6E" />
  </svg>
);

type Props = {
  className?: string;
  compact?: boolean;
};

const LanguageSwitcher = ({ className = "", compact = false }: Props) => {
  const { language, setLanguage, t } = useLanguage();

  const baseBtn =
    "inline-flex items-center justify-center rounded-full p-1 transition-all duration-200";
  const active = "ring-2 ring-accent-light/80 scale-105";
  const inactive = "opacity-60 hover:opacity-100 hover:scale-105";

  const size = compact ? 22 : 26;

  const make = (lang: Language, label: string, Flag: typeof BrazilFlag) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      aria-label={label}
      aria-pressed={language === lang}
      className={`${baseBtn} ${language === lang ? active : inactive}`}
    >
      <span className="overflow-hidden rounded-sm">
        <Flag size={size} />
      </span>
    </button>
  );

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {make("pt", t("lang.switchTo.pt"), BrazilFlag)}
      {make("en", t("lang.switchTo.en"), USAFlag)}
    </div>
  );
};

export default LanguageSwitcher;
