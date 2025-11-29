interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-[32px] md:text-[44px] font-semibold tracking-tight text-[var(--pc-navy)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--pc-navy)]/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

