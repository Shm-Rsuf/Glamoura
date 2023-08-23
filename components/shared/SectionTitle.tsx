import { cn } from "@/library/utils";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color = "bg-red",
}) => {
  return (
    <div className="flex gap-2.5 items-center">
      <span className={cn("w-4 h-20", color)}></span>
      <div className="flex flex-col gap-2.5 items-start">
        <span className="uppercase text-lg font-semibold tracking-[.35em]">
          {title}
        </span>
        <h3 className="text-5xl">{subtitle}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
