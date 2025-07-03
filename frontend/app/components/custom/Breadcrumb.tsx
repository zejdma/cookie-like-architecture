import { useLocation, Link } from "react-router";
import { Home, ChevronRight } from "lucide-react";
import { breadcrumbMap } from "~/lib/breadcrumbConfig";

export function Breadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const crumbs = pathParts.map((_, index) => {
    const to = "/" + pathParts.slice(0, index + 1).join("/");
    const label = breadcrumbMap[to] || decodeURIComponent(pathParts[index]);
    return { to, label };
  });

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
      {/* Domů */}
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>

      {crumbs.map((crumb, i) => (
        <span key={crumb.to} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {i === crumbs.length - 1 ? (
            <span className="font-medium text-foreground">{crumb.label}</span>
          ) : (
            <Link
              to={crumb.to}
              className="hover:underline hover:text-foreground transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
