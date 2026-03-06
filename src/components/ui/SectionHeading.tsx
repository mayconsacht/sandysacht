import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto", alignClasses[align], className)}>
      {eyebrow && (
        <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary-500 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
