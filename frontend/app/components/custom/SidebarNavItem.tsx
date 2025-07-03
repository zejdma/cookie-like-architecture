import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import type { LucideIcon } from "lucide-react";

type Props = {
  to: string;
  icon: LucideIcon;
  label: string;
};

export function SidebarNavItem({ to, icon: Icon, label }: Props) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-default text-accent-bohemia"
          : "text-navigation-item hover:bg-default"
      )}
    >
      <Icon className="size-4 shrink-0" />
      {label}
    </Link>
  );
}
