import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="size-18 text-gray-400 bg-gray-100 rounded-full"
        >
          {icon}
        </EmptyMedia>
        <EmptyTitle className="text-gray-900 font-bold">{title}</EmptyTitle>
        <EmptyDescription className="text-gray-500 font-semibold">
          {description}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>{action}</EmptyContent>
    </Empty>
  );
}
