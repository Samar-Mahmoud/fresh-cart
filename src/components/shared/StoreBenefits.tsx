import { StoreBenefitProps } from "@/types/props";

export default function StoreBenefits({
  benefits,
  iconClasses,
  wrapperClasses = "",
}: StoreBenefitProps) {
  return (
    <>
      {benefits.map(({ title, description, icon }) => (
        <div
          key={title}
          className={`flex items-center gap-3 ${wrapperClasses}`}
        >
          <div className={`${iconClasses} ${icon.style ?? ""}`}>
            {icon.node}
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
            <p className="text-gray-500 text-xs font-medium">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
